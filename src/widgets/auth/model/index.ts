export type AuthSectionType =
  | "login"
  | "forget-password"
  | "change-password"
  | "signup"
  | "confirm-email"

export interface AuthSectionProps {
  page: AuthSectionType
  title?: string
}
