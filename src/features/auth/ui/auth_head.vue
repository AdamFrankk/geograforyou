<script lang="ts" setup>
import { Icon } from "@/shared/uikit/icons"
// Props
interface Props {
  title: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="auth-head">
    <h2 class="auth-head__title">{{ props.title }}</h2>
  </div>
</template>

<style lang="postcss" scoped>
.auth-head {
  @apply flex items-center text-center mx-auto;
  &__title {
    @apply text-2xl font-bold text-center;
  }
}
</style>
