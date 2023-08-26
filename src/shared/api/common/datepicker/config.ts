import type { DatepickerConfig } from "."

export const defaultDatepickerConfig: DatepickerConfig = {
  position: "right",
  disableYearSelect: true,
  autoApply: true,
  locale: "ru",
  monthNameFormat: "long",
  closeOnAutoApply: false,
  dayNames: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
}
