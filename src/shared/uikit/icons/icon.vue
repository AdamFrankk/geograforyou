<script setup lang="ts">
import type { IconProps } from "@/shared/api"
import type { SpritesMap } from "./sprite.h"

const props = defineProps<IconProps<keyof SpritesMap>>()
</script>

<template>
  <svg class="icon" :width="w" :height="h">
    <use :xlink:href="`/sprite/${props.type}.svg#${props.name}`" />
  </svg>
</template>

<style scoped lang="postcss">
.icon {
  @apply fill-main-icon ease-linear duration-100;
}
</style>
