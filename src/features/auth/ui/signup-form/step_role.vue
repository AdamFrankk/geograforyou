<script setup lang="ts">
import { reactive } from "vue"

import { AuthText } from "@/features/auth/ui"
import { Button } from "@/shared/uikit/buttons"

import type { AuthDto_Role } from "../../model"
import type { UserRole } from "@/shared/api"

// Props and Emits
interface Emits {
  (e: "update:next"): void
  (e: "push:data", data: AuthDto_Role): void
}
const emit = defineEmits<Emits>()

// Variables
const authDataRole = reactive<AuthDto_Role>({
  role: null
})

function updateRole(role: UserRole) {
  authDataRole.role = role
  emit("push:data", authDataRole)
}
</script>

<template>
  <div>
    <AuthText class="auth-form__text auth-form__text--bold" bold>Выберите роль</AuthText>
    <AuthText class="auth-form__text">Приложение подстроится под вас </AuthText>
    <div class="auth-form__role-buttons">
      <Button class="auth-form__button" type="submit" @click="updateRole('OWNER')">
        Собственник
      </Button>
      <Button class="auth-form__button" type="submit" @click="updateRole('OWNER')"
        >Арендатор
      </Button>
      <Button class="auth-form__button" type="submit">Риелтор </Button>
      <Button class="auth-form__button" type="submit">Работник </Button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
@import "../index.pcss";
</style>
