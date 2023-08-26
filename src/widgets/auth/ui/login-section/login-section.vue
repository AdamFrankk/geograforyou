<script lang="ts" setup>
import { reactive, ref } from "vue"

import { LoginEmail, LoginForm } from "@/features/auth/ui/login-form"
import type { AuthStepsType, AuthType, LoginEmailDto, LoginPhoneDto } from "@/shared/api"

const activeAuthType = ref<AuthType>("email")
const authStep = ref<AuthStepsType>(1)
const authData_email = reactive<LoginEmailDto>({
  mail: "",
  password: ""
})
const authData_phone = reactive<LoginPhoneDto>({
  phone: "",
  password: ""
})

// Methods
function changeAuthType(data: AuthType) {
  activeAuthType.value = data
}
function fillData(data: LoginEmailDto | LoginPhoneDto) {
  if (activeAuthType.value === "email") {
    Object.assign(authData_email, data)
  } else if (activeAuthType.value === "phone") {
    Object.assign(authData_phone, data)
  }
}
</script>

<template>
  <LoginForm
    :active-auth-type="activeAuthType"
    :auth-step="authStep"
    :data="activeAuthType === 'email' ? authData_email : authData_email"
    @update:changeAuthType="changeAuthType"
  >
    <template v-slot:email> <LoginEmail @push:data="fillData" /> </template>
  </LoginForm>
</template>

<style scoped lang="postcss">
@import "@/features/auth/ui/index.pcss";
</style>
