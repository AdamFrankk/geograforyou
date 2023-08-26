import type { ErrorObject } from "@vuelidate/core"

export type InputType = "text" | "email" | "password" | "color" | "number" | "date" | "time"
export type InputSize = "small" | "extrasmall" | "normal"
export type InputState = "error" | "success" | null

export interface InputProps {
  inputValue?: string | null
  type: InputType
  size?: InputSize
  label?: string
  placeholder?: string
  description?: string
  state?: InputState
  stateInfo?: ErrorObject[] | null
}

export interface SearchInputProps extends Omit<InputProps, "label" | "type" | "description"> {
  width: string
}

export interface PhoneInputProps extends Omit<InputProps, "label" | "type"> {}

export interface SelectItem {
  id: number
  title: string
}

export interface SelectInputProps extends Omit<InputProps, "label" | "type" | "inputValue"> {
  items: SelectItem[]
  activeItem?: SelectItem | null | undefined
  bgColor?: string
}

export interface InputEmits {
  (e: "update:inputValue", value: string): void
  (e: "blur"): void
}

export interface PhoneInputEmits extends InputEmits {
  (e: "update:unmaskedValue", value: string): void
}
