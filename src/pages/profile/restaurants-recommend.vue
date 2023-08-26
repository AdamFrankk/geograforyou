<script lang="ts" setup>
import { ref } from "vue"

import { useAuthStore } from "@/entities/session"
import { Button } from "@/shared/uikit/buttons"
import { BaseLayout } from "@/widgets/layouts"
import { MyProfileSection } from "@/widgets/profile"

const authStore = useAuthStore()
</script>

<template>
  <BaseLayout>
    <div class="recommend-page">
      <h2 class="recommend-page__title">Рекомендации по ресторанам</h2>
      <div class="recommend-page__body"></div>
    </div>
  </BaseLayout>
</template>

<style lang="postcss" scoped>
.recommend-page {
  @apply p-default;
  &__title {
    @apply text-xl font-bold text-center mb-[20px];
  }
}
</style>
