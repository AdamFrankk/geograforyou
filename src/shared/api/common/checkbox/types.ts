export interface CheckboxProps {
  _name: string
  modelValue: any[]
  value: Object
}

export interface CheckboxEmits {
  (e: "update:modelValue", value: any[]): void
}
