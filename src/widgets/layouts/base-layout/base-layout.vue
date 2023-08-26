<script lang="ts" setup>
import { Navbar } from "@/widgets/navbar"
</script>

<template>
  <div class="base-layout">
    <div class="base-layout__body">
      <slot></slot>
      <Navbar></Navbar>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.base-layout {
  @apply flex;
  &__body {
    @apply w-full max-h-full h-[calc(100vh-72px)] relative;
    &::after {
      content: "";
      @apply bg-[url('@/app/static/images/background.png')] bg-center opacity-40 w-full h-full fixed z-[-1] left-0 bottom-[-50vh] bg-no-repeat;
    }
  }
}
</style>
