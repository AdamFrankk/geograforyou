<script lang="ts" setup>
import { ref } from "vue"

import { AuthHead } from "@/features/auth/ui"

import type { AuthSectionProps } from "../model"
import LoginSection from "./login-section"
import SignUpSection from "./signup-section"

// Props
const props = withDefaults(defineProps<AuthSectionProps>(), {
  page: "login",
  title: ""
})
// Variables
const link_to_back = ref("/")
</script>

<template>
  <div class="auth-section">
    <AuthHead :title="props?.title" :link="link_to_back" />
    <!-- Sections -->
    <LoginSection v-if="props.page === 'login'" />
    <SignUpSection v-else-if="props.page === 'signup'" />
  </div>
</template>

<style lang="postcss" scoped>
.auth-section {
  @apply bg-white relative z-10 pt-[94px] px-[20px] pb-[20px];
  @apply min-w-full w-[50vw] max-w-full min-h-screen max-h-screen overflow-x-hidden overflow-y-auto;
}
</style>
