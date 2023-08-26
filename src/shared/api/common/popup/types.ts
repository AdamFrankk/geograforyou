export interface PopupProps {
  width: number
  bgColor?: string
  isOpen: boolean
}
export interface PopupEmits {
  (e: "close"): void
}
