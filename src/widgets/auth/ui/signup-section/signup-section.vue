<script lang="ts" setup>
import { reactive, ref } from "vue"

import type { AuthDto_Main, AuthDto_Passwords } from "@/features/auth/model"
import { SignUpForm, SignUpStepName, SignUpStepPasswords } from "@/features/auth/ui/signup-form"
import type { AuthDto } from "@/shared/api"
import type { AuthStepsType, AuthType } from "@/shared/api/common"

const activeAuthType = ref<AuthType>("email")
const authStep = ref<AuthStepsType>(1)
const authData = reactive<AuthDto>({
  firstname: "",
  lastname: "",
  phone: "",
  mail: "",
  password: ""
})

// Methods
function changeAuthType(data: AuthType) {
  activeAuthType.value = data
}
function fillData(data: AuthDto_Main | Omit<AuthDto_Passwords, "confirmPassword">) {
  Object.assign(authData, data)
}
</script>

<template>
  <SignUpForm
    :auth-step="authStep"
    :active-auth-type="activeAuthType"
    :data="authData"
    @update:next="authStep++"
    @update:prev="
      (data: AuthStepsType) => {
        authStep = data
      }
    "
  >
    <!-- Первый шаг -->
    <template v-slot:first_step>
      <SignUpStepName
        :active-auth-type="activeAuthType"
        @update:next="authStep++"
        @change:swipe-to="changeAuthType"
        @push:data="fillData"
      />
    </template>
    <!-- Второй шаг -->
    <template v-slot:second_step>
      <SignUpStepPasswords
        :active-auth-type="activeAuthType"
        @update:next="authStep++"
        @update:prev="authStep--"
        @push:data="fillData"
      />
    </template>
  </SignUpForm>
</template>
