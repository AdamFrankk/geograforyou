<script lang="ts" setup>
import { ref } from "vue"

import { useAuthStore } from "@/entities/session"
import { Button } from "@/shared/uikit/buttons"
import { BaseLayout } from "@/widgets/layouts"
import { YMap } from "@/widgets/map"

const city = ref("Астрахани")
const authStore = useAuthStore()
</script>

<template>
  <BaseLayout>
    <div class="map-page">
      <div class="map-page__map"><YMap></YMap></div>
    </div>
  </BaseLayout>
</template>

<style lang="postcss" scoped>
.map-page {
  &__title {
    @apply text-2xl font-bold text-center mb-[32px];
  }
  &__map {
    @apply border-[1px] border-solid border-color-grey-70;
  }
}
</style>
