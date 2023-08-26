import type { VueDatePickerProps } from "@vuepic/vue-datepicker"

export interface DatepickerConfig {
  position?: VueDatePickerProps["position"]
  disableYearSelect?: boolean
  autoApply?: boolean
  locale?: string
  monthNameFormat?: VueDatePickerProps["monthNameFormat"]
  closeOnAutoApply?: boolean
  dayNames?: string[]
}
