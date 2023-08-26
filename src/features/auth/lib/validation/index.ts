import type { PasswordsDto } from "@/shared/api"

export function regexPassword(value: string) {
  if (
    // eslint-disable-next-line no-useless-escape
    /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!()*,/:;<>?\\\]\[\-_`{}~@$!%*?&]).*$/.test(
      value
    )
  )
    return true
  return false
}

export function samePassword(passwords: PasswordsDto) {
  if (passwords.password) if (passwords.password === passwords.confirmPassword) return true
  return false
}
