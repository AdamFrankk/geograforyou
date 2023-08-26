<script lang="ts" setup>
import type { ButtonProps } from "@/shared/api/common/buttons"
// Props
const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  color: null,
  size: null,
  bold: null
})
</script>

<template>
  <button
    class="sm-button"
    :disabled="props.disabled"
    :class="[
      props.color ? `sm-button--${props.color}` : null,
      props.bold ? `sm-button--${props.bold}` : null,
      props.size ? `sm-button--${props.size}` : null,
      props.disabled ? `sm-button--disabled` : null
    ]"
  >
    <slot name="left_icon"> </slot>
    <slot></slot>
    <slot name="right_icon"></slot>
  </button>
</template>

<style lang="postcss" scoped>
.sm-button {
  @apply bg-primary-color flex justify-center items-center w-full py-[16px] px-[32px] rounded-default;
  @apply text-[16px] text-white text-center leading-[150%] font-normal;
  &:hover {
    @apply bg-green-600
  }
  &__icon {
    &--left {
      @apply mr-[6px];
    }
  }
  /* Size */
  &--small {
    @apply py-[8px] px-[24px] w-max text-[14px] h-[40px] items-center;
  }
  /* Colors */
  &--white {
    @apply bg-transparent text-primary-color border-solid border-[1px] border-primary-color;
    &:hover {
      @apply bg-cyan-50;
    }
  }
  /* Bold */
  &--semibold {
    @apply font-semibold;
  }
  &--bold {
    @apply font-bold;
  }
  /* Disabled */
  &--disabled,
  &:disabled {
    @apply opacity-[0.5];
  }
  &:hover:not(:disabled) {
    @apply opacity-[0.9];
  }
}
</style>
