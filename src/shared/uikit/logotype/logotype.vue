<script lang="ts" setup>
/* Props */
interface Props {
  size?: string
  type?: string
  absolute?: boolean
  hideText: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: "primary",
  absolute: false,
  hideText: false
})
/* Variables */
// var type: Ref<string> = ref("white")
</script>

<template>
  <div
    class="sm-logotype"
    :class="[
      props.type ? `sm-logotype--${props.type}` : '',
      props.size ? `sm-logotype--${props.size}` : '',
      props.absolute ? `sm-logotype--absolute` : ''
    ]"
  >
    <span class="sm-logotype__text" v-if="!hideText">GeograForYou</span>
  </div>
</template>

<style lang="postcss" scoped>
.sm-logotype {
  /* Default settings */
  @apply flex items-center select-none text-secondary-color;
  @apply text-[20px] leading-[19px] uppercase;
  svg {
    @apply min-h-[32px] max-h-[32px] min-w-[26px] max-w-[26px];
    @apply mr-[10px];
  }
  /* Colors */
  &--white {
    @apply text-white;
  }
  &--gray {
    @apply text-color-grey-500;
  }
  &--absolute {
    @apply z-10 absolute;
  }
  /* Sizes */
  &--medium {
    @apply text-[20px] leading-[19px] font-medium;
    svg {
      @apply min-h-[32px] max-h-[32px] min-w-[26px] max-w-[26px];
      @apply mr-[6px];
    }
  }
  &--big {
    @apply leading-[56px] text-[64px];
    svg {
      @apply min-h-[96px] max-h-[96px] min-w-[70px] max-w-[70px];
      @apply mr-[20px];
    }
  }
}
</style>
