export interface SpritesMap {
  common:
    | "arrow-to-back"
    | "calendar"
    | "chevron"
    | "close"
    | "filters"
    | "help"
    | "paperclip"
    | "password-eye-hide"
    | "password-eye"
    | "plus"
    | "search"
    | "step-checked"
    | "verify-checked"
  map: "attraction-mark"
  navigation: "account" | "carta" | "earth" | "map"
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  common: [
    "arrow-to-back",
    "calendar",
    "chevron",
    "close",
    "filters",
    "help",
    "paperclip",
    "password-eye-hide",
    "password-eye",
    "plus",
    "search",
    "step-checked",
    "verify-checked"
  ],
  map: ["attraction-mark"],
  navigation: ["account", "carta", "earth", "map"]
}
