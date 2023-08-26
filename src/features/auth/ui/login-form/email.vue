<script setup lang="ts">
import { reactive, watch } from "vue"

import type { LoginEmailDto } from "@/shared/api"

import { Button } from "@/shared/uikit/buttons"
import { Input } from "@/shared/uikit/inputs"
import { useVuelidate } from "@vuelidate/core"
import { email, helpers, minLength, required } from "@vuelidate/validators"

// Props and Emits
interface Emits {
  (e: "push:data", data: LoginEmailDto): void
}
const emit = defineEmits<Emits>()

// Данные форм
const authData_email = reactive<LoginEmailDto>({
  mail: "",
  password: ""
})
// Validation
const rules_email = {
  mail: {
    required: helpers.withMessage("Это поле не может быть пустым", required)
    // email: helpers.withMessage("Неправильный адрес почты", email)
  },
  password: {
    required: helpers.withMessage("Это поле не может быть пустым", required),
    minLength: helpers.withMessage("Минимальная длина пароля - 5 символов", minLength(5))
  }
}
const v$ = useVuelidate(rules_email, authData_email, { $lazy: true, $autoDirty: true })
// Watchers
watch(authData_email, (newData) => {
  emit("push:data", newData)
})
</script>
<template>
  <Input
    class="auth-form__input"
    placeholder="Введите E-mail"
    v-model:inputValue="authData_email.mail"
    :state="v$.mail?.$silentErrors.length !== 0 ? 'error' : null"
    :stateInfo="v$.mail?.$silentErrors"
  />
  <Input
    class="auth-form__input"
    placeholder="Введите пароль"
    type="password"
    v-model:inputValue="authData_email.password"
    :state="v$.password.$silentErrors.length !== 0 ? 'error' : null"
    :stateInfo="v$.password.$silentErrors"
  />
  <div class="auth-form__forget-link">
    <router-link :to="{ name: 'login' }" class="link">Забыли пароль?</router-link>
  </div>
  <Button class="auth-form__button" type="submit" :disabled="v$.$invalid">Продолжить</Button>
</template>

<style scoped lang="postcss">
@import "../index.pcss";
.auth-form {
  &__input {
    &:last-child {
      @apply mb-[12px];
    }
  }
}
</style>
