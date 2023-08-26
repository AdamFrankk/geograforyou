import type { UserRole } from "."

export interface AuthDto {
  firstname: string
  lastname: string
  mail: string | null
  phone: string | null
  password: string
}

export interface LoginEmailDto {
  mail: string
  password: string
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
