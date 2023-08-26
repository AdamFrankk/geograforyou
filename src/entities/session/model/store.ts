import { reactive, ref } from "vue"

import jwtDecode from "jwt-decode"
import { defineStore } from "pinia"

import { router } from "@/app/providers"
import type {
  AuthDto,
  AuthResponse,
  AuthType,
  ExceptionResponse,
  LoginEmailDto,
  User,
  UserResponse
} from "@/shared/api"
import { apiInstance } from "@/shared/api/user/config"
import type { TokenPayload, TokenProps } from "./types"

export type AuthStoreState = {
  authUser: User | null
}

export const useAuthStore = defineStore("authStore", () => {
  // States
  const userStringify = localStorage.getItem("user")
  const userState = ref<TokenProps | null>(
    userStringify ? (JSON.parse(userStringify) as TokenProps) : null
  )
  // const returnUrlState = ref<string | null>(null)
  const state = reactive<AuthStoreState>({
    authUser: null
  })
  const errors = ref<ExceptionResponse | null>(null)
  // Getters
  // Actions
  const refreshAccessToken = async () => {
    const response = await apiInstance.get<AuthResponse>("auth/refresh")
    return response.data
  }

  const setAuthUser = (user: User | null) => {
    state.authUser = user
  }
  const setErrors = (error: ExceptionResponse) => {
    errors.value = error
  }
  const setToken = (access_token: string) => {
    userState.value = {
      token: access_token,
      tokenPayload: jwtDecode<TokenPayload>(access_token)
    }
  }
  const setAxiosHeader = (token: string) => {
    apiInstance.defaults.headers.common.Authorization = `Bearer ${
      userStringify ? (JSON.parse(userStringify) as TokenProps).token : token
    }`
  }
  const signUpUser = async (user: AuthDto) => {
    await apiInstance.post<AuthResponse>("auth/register", user)
  }
  const loginUser = async (user: LoginEmailDto) => {
    await apiInstance
      .post<AuthResponse>(`auth/authenticate`, user)
      .then((_response) => {
        setToken(_response?.data?.token)
        setAxiosHeader(_response?.data?.token)
      })
      .then(() => {
        localStorage.setItem("user", JSON.stringify(userState.value))
      })
    // .catch((err) => {
    //   setErrors(err)
    // })
  }
  const logout = async () => {
    userState.value = null
    localStorage.removeItem("user")
    await router.push({ name: "test" })
  }
  const getMe = async () => {
    const response = await apiInstance.get<UserResponse>("users/me")
    return response.data
  }
  // Refresh token strategy
  apiInstance.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const originalRequest = error?.config
      const errMessage = error?.response?.data?.message as string
      if (errMessage?.includes("not logged in") && !originalRequest?._retry) {
        originalRequest._retry = true
        await refreshAccessToken()
        return apiInstance(originalRequest)
      }
      return Promise.reject(error)
    }
  )
  // Logout strategy
  if (userState.value) {
    const currentTime = Date.now() / 1000
    if (parseInt(userState.value.tokenPayload.exp) < currentTime) {
      logout()
    }
  }
  // Return
  return {
    state,
    userState,
    setAuthUser,
    setToken,
    loginUser,
    signUpUser,
    logout
  }
})
