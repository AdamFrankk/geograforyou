<script setup lang="ts">
import { computed } from "vue"
import type { CheckboxProps, CheckboxEmits } from "@/shared/api/common/checkbox"
// Props and Emits
const props = defineProps<CheckboxProps>()
const emit = defineEmits<CheckboxEmits>()

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit("update:modelValue", value)
  }
})
</script>

<template>
  <input
    class="sm-checkbox__input"
    :id="props._name"
    type="checkbox"
    v-model="model"
    :value="props.value"
  />
  <label class="sm-checkbox__label" :for="props._name">
    <slot></slot>
  </label>
</template>

<style scoped lang="postcss">
.sm-checkbox {
  &__input {
    @apply w-0 h-0 invisible opacity-0 relative z-[-9999] cursor-pointer;
    &:checked {
      & ~ .sm-checkbox__label {
        &::before {
          @apply border-primary-color bg-transparent;
          content: url("@/app/static/icons/checkmark.svg");
        }
      }
    }
  }
  &__label {
    @apply text-secondary-color text-[14px] leading-[150%] ml-[36px] relative cursor-pointer;
    &::before {
      content: "";
      @apply p-[3px_4px] h-[24px] w-[24px] rounded-[8px] border-[1px] absolute left-[-36px] top-[-4px] border-solid border-color-grey-40;
    }
    &:hover {
      &::before {
        @apply border-primary-color bg-transparent;
      }
    }
  }
}
</style>
