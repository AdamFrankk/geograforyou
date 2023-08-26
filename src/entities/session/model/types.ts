import type { Role } from "@/shared/api"

export interface TokenPayload {
  roles: Array<Role>
  sub: string
  exp: string
  iat: string
}

export type TokenProps = {
  token: string
  tokenPayload: TokenPayload
}
