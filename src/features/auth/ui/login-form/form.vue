<script lang="ts" setup>
import { ref } from "vue"

import { useMutation } from "vue-query"

import { router } from "@/app/providers"
import { useAuthStore } from "@/entities/session"
import { AuthTerms } from "@/features/auth/ui"
import type { ExceptionResponse, LoginEmailDto } from "@/shared/api"

import type { AuthFormProps } from "../../model"

// Props and Emits
interface Props extends AuthFormProps {
  data: LoginEmailDto
}
const props = defineProps<Props>()

// Store
const authStore = useAuthStore()
const authError = ref<ExceptionResponse | null>(null)
const { mutate } = useMutation(
  (credentials: LoginEmailDto) => authStore.loginUser(credentials, props.activeAuthType),
  {
    onSuccess: () => {
      router.push({ name: "test" })
    },
    onError: (error) => {
      if (Array.isArray((error as any).response.data.error)) {
        ;(error as any).response.data.error.forEach((el: any) => {
          console.log(el)
        })
      } else {
        authError.value = (error as any).response.data
      }
    }
  }
)

function onSubmit() {
  mutate(props.data)
  return false
}
</script>

<template>
  <form class="auth-form" @submit.prevent="onSubmit()">
    <slot name="email" v-if="props.activeAuthType === 'email'"> </slot>
    <span class="auth-form__error-message" v-if="authError"> {{ authError?.message }}</span>
    <AuthTerms class="auth-form__text" v-if="props.authStep === 1" />
  </form>
</template>

<style scoped lang="postcss">
@import "@/features/auth/ui/index.pcss";
</style>
