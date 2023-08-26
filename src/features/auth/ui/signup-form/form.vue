<script lang="ts" setup>
import { ref, watch } from "vue"

import { useMutation } from "vue-query"

import { useAuthStore } from "@/entities/session"
import { AuthSteps, AuthTerms } from "@/features/auth/ui"
import type { AuthDto, AuthStepsType, ExceptionResponse } from "@/shared/api"

import type { AuthFormProps } from "../../model"

// Props and Emits
interface Props extends AuthFormProps {
  data: AuthDto
}
interface Emits {
  (e: "update:next"): void
  (e: "update:prev", stepNumber: AuthStepsType): void
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()
// Store
const authStore = useAuthStore()
// Variables
const errors = ref<ExceptionResponse | null>(null)
const { mutate } = useMutation((credentials: AuthDto) => authStore.signUpUser(credentials), {
  onSuccess: () => {
    setTimeout(() => {
      emit("update:next")
    }, 1000)
  },
  onError: (err: any) => {
    errors.value = err?.response?.data as ExceptionResponse
    if (errors.value?.statusCode === 409) {
      emit("update:prev", 1)
    }
  }
})
// Watchers
// Methods
function onSubmit() {
  mutate(props.data)
  return false
}
</script>

<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <AuthSteps :step="props.authStep" v-if="authStep < 3" />
    <!-- Первый шаг -->
    <slot name="first_step" v-if="props.authStep === 1"> </slot>
    <!-- Второй шаг -->
    <slot name="second_step" v-else-if="props.authStep === 2"> </slot>
    <span class="auth-form__error-message" v-if="errors">{{ errors.message }}</span>
    <!-- Только на первом шаге -->
    <AuthTerms class="auth-form__text" v-if="props.authStep === 1" />
  </form>
</template>

<style scoped lang="postcss">
@import "@/features/auth/ui/index.pcss";
.auth-form {
  &__input {
    @apply mb-[20px];
  }
  &__button {
    @apply mb-[16px];
  }
}
</style>
