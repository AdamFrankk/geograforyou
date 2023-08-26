import type { AuthDto, AuthStepsType, AuthType, UserRole } from "@/shared/api"

export interface AuthFormProps {
  authStep: AuthStepsType
  activeAuthType: AuthType
}

export interface AuthStateProps {
  activeAuthType: AuthType
}

export interface AuthTypeEmits {
  (e: "update:changeAuthType", authType: AuthType): void
}

export interface AuthDto_Main extends Omit<AuthDto, "password" | "role" | "confirmPassword"> {}
