import type { SpritesMap } from "@/shared/uikit/icons/sprite.h"

export type AuthType = "phone" | "email"
export type AuthStepsType = 1 | 2 | 3 | 4

export type Country = {
  id: number
  title: string
  name: string
  mask: string
  maskRegular: string
  code: string
}

export interface PreloaderProps {
  loadingSpeed?: number
  overflowActive?: boolean
  transitionSpeed?: number
  transitionType?: string
}

export interface IconProps<Group extends keyof SpritesMap> {
  name: SpritesMap[Group]
  type: Group
  w: number
  h: number
}
