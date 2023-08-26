<script lang="ts" setup>
interface Props {
  type?: string
  bold?: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <p
    :class="`auth-text  
    ${props.bold ? 'auth-text_bold' : ''} 
    ${props.type ? `auth-text_${props.type}` : ''}`"
  >
    <slot></slot>
  </p>
</template>

<style scoped lang="postcss">
.auth-text {
  @apply text-left text-secondary-color;
  &_bold {
    @apply font-bold;
  }
  &_small {
    @apply text-[12px] font-normal leading-[16px] tracking-[0.12px] text-color-grey-500;
  }
}
</style>
