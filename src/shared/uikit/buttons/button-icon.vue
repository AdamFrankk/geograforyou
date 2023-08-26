<script lang="ts" setup>
import type { IconProps } from "@/shared/api"
import type { ButtonProps } from "@/shared/api/common/buttons"

import { Icon } from "@/shared/uikit/icons"
import type { SpritesMap } from "@/shared/uikit/icons/sprite.h"

// Props
interface Props extends IconProps<keyof SpritesMap>, Omit<ButtonProps, "bold"> {
  active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  color: null,
  size: null,
  h: 20,
  w: 20,
  active: false
})
</script>

<template>
  <button
    class="sm-button-icon"
    :disabled="props.disabled"
    :class="[
      props.color ? `sm-button-icon--${props.color}` : null,
      props.size ? `sm-button-icon--${props.size}` : null,
      props.disabled ? `sm-button-icon--disabled` : null,
      props.active ? `sm-button-icon--active` : null
    ]"
  >
    <Icon
      :w="props.w"
      :h="props.h"
      :type="props.type"
      :name="props.name"
      class="sm-button-icon__icon"
    />
  </button>
</template>

<style lang="postcss" scoped>
.sm-button-icon {
  @apply bg-primary-color flex justify-center items-center p-[10px] rounded-default;
  &__icon {
    &--left {
      @apply mr-[6px];
    }
  }
  &--medium {
    @apply px-[20px];
  }
  &--small {
    @apply p-[8px];
  }
  &--extrasmall {
    @apply p-[4px];
  }
  &--active {
    @apply bg-cyan-700 transition duration-200 ease-out;
  }
  &--disabled,
  &:disabled {
    @apply opacity-[0.5];
    &:hover {
      @apply select-none;
    }
  }
  &:hover {
    @apply bg-cyan-500;
  }
  &--grey {
    @apply bg-color-grey-50;
    &:hover {
      @apply bg-color-grey-50;
    }
  }
  &--white {
    @apply bg-white;
    &:hover {
      @apply bg-cyan-50;
    }
  }
}
</style>
