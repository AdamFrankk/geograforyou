<script lang="ts" setup>
import { Preloader } from "@/shared/uikit/preloader"
import { AuthSection } from "@/widgets/auth"
import { ref } from "vue"

const showAnimation = ref(true)
</script>

<template>
  <Preloader @loading-is-over="showAnimation = false">
    <AuthSection page="signup" title="Регистрация" />
  </Preloader>
</template>

<style lang="postcss" scoped></style>
