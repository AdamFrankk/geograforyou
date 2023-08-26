<script lang="ts" setup>
import { AuthSection } from "@/widgets/auth"
import { Preloader } from "@/shared/uikit/preloader"
import { ref } from "vue"

const showAnimation = ref(true)
</script>

<template>
  <Preloader @loading-is-over="showAnimation = false">
    <AuthSection page="login" title="Вход" />
  </Preloader>
</template>

<style lang="postcss" scoped></style>
