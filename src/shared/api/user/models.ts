import type { UserRole } from "."

export interface AuthDto {
  firstname: string
  secondname: string
  lastname: string
  mail: string | null
  phone: string | null
  password: string
}

export interface LoginEmailDto {
  mail: string
  password: string
}

export interface LoginPhoneDto {
  phone: string
  password: string
}

export interface PasswordsDto {
  password: string
  confirmPassword: string
}

export interface ForgetPasswordEmailDto {
  email: string
}

export interface ForgetPasswordPhoneDto {
  phone: string
}

export interface AuthResponse {
  token: string
}

export interface GenericResponse {
  status: string
  message: string
}

export interface ExceptionResponse {
  message: string
  httpStatus: string
  statusCode: number
  field: string
  errorMessage: string
}

export interface Role {
  id: number
  name: UserRole
}

export interface User {
  id: string
  _id: string
  firstname: string
  secondname: string
  lastname: string
  phone: string | null
  email: string | null
  birthdate: string
  createdAt: Date
  updatedAt: Date
  photo: string
  role: Role
}

export interface UserResponse {
  status: string
  data: {
    user: User
  }
}
