<script lang="ts" setup>
import { ref } from "vue"

import { useAuthStore } from "@/entities/session"
import { Button } from "@/shared/uikit/buttons"
import { BaseLayout } from "@/widgets/layouts"
import { MyProfileSection } from "@/widgets/profile"

const authStore = useAuthStore()
</script>

<template>
  <BaseLayout> <MyProfileSection></MyProfileSection></BaseLayout>
</template>

<style lang="postcss" scoped></style>
