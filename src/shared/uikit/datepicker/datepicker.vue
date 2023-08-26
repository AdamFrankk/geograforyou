<script setup lang="ts">
import "@vuepic/vue-datepicker/dist/main.css"

import { onMounted, reactive, ref } from "vue"
import { defaultDatepickerConfig, type DatepickerConfig } from "@/shared/api/common/datepicker"
import { ButtonIcon } from "@/shared/uikit/buttons"
import VueDatePicker from "@vuepic/vue-datepicker"

// Variables
const datepickerConfig = reactive<DatepickerConfig>(defaultDatepickerConfig)
const options = ref<Intl.DateTimeFormatOptions>({ year: "numeric", month: "long", day: "numeric" })
const date = ref()

// Lifecycles
onMounted(() => {
  const startDate = new Date()
  const endDate = new Date(new Date().setDate(startDate.getDate() + 6))
  date.value = [startDate, endDate]
})
// Methods
const format = (date: Date[]) => {
  const start = date[0]?.toLocaleDateString("ru-RU", options as Intl.DateTimeFormatOptions)
  const end = date[1]?.toLocaleDateString("ru-RU", options as Intl.DateTimeFormatOptions)
  return `${start} - ${end}`
}
</script>

<template>
  <VueDatePicker
    v-model="date"
    class="sm-datepicker"
    :position="datepickerConfig?.position"
    :disable-year-select="datepickerConfig?.disableYearSelect"
    :auto-apply="datepickerConfig?.autoApply"
    :locale="datepickerConfig?.locale"
    :month-name-format="datepickerConfig?.monthNameFormat"
    :close-on-auto-apply="datepickerConfig?.closeOnAutoApply"
    :day-names="datepickerConfig?.dayNames"
    :format="format"
  >
    <template #dp-input="{ value, isMenuOpen }">
      <div class="sm-datepicker__body">
        <div class="sm-datepicker__value">{{ value }}</div>
        <ButtonIcon
          :w="20"
          :h="20"
          type="common"
          name="calendar"
          size="medium"
          :active="isMenuOpen"
          fillColor="white"
        />
      </div>
    </template>
    <template #calendar-header="{ index, day }">
      <div
        class="sm-datepicker__week-day"
        :class="index === 5 || index === 6 ? 'sm-datepicker__week-day--holiday' : ''"
      >
        {{ day }}
      </div>
    </template>
  </VueDatePicker>
</template>

<style scoped lang="postcss">
@import "./normalize.pcss";
.sm-datepicker {
  &__body {
    @apply flex;
  }
  &__value {
    @apply p-[8px_12px] mr-[12px] rounded-default border-[1px] border-solid border-color-grey-200 bg-white;
    @apply text-[12px] leading-[21px] font-semibold shadow-[0_1px_3px_0_rgba(96,108,128,0.05)];
  }
  &__week-day {
    &--holiday {
      @apply text-error-500;
    }
  }
  :deep(.dp__clear_icon) {
    @apply hidden;
  }
}
</style>
