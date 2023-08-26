<script setup lang="ts">
import { Icon } from "@/shared/uikit/icons"
// Interfaces
interface Props {
  length: number
  step: number
}
// Emits and Props
const props = withDefaults(defineProps<Props>(), {
  length: 3,
  step: 1
})
</script>

<template>
  <div class="auth-steps">
    <template v-for="item in props.length" :key="item">
      <div class="auth-steps__item" :class="{ active: props.step === item }">
        <div class="auth-steps__item-circle">
          <span v-if="props.step <= item"> {{ item }}</span>
          <Icon
            :w="12"
            :h="12"
            class="auth-steps__item-icon"
            type="common"
            name="step-checked"
            v-else
          />
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="postcss">
.auth-steps {
  @apply flex items-center justify-around py-[8px] mb-[20px] relative;
  &::after {
    content: "";
    @apply absolute z-0 w-full h-[1px] top-[20px] bg-green-100;
  }
  &__item {
    @apply z-10;
    &.active {
      .auth-steps__item-label {
        @apply text-black;
      }
      .auth-steps__item-circle {
        @apply bg-primary-color text-[10px] font-semibold tracking-[0.5px] text-white leading-[0%] border-0;
      }
    }
  }
  &__item-circle {
    @apply bg-green-50 border-[1px] border-solid border-green-400 rounded-full w-[24px] h-[24px] flex items-center justify-center mb-[14px];
    @apply text-green-400 text-center text-[14px] font-normal leading-[150%]; /* text styles */
  }
  &__item-label {
    @apply text-color-grey-40 text-[12px] font-bold;
  }
}
</style>
