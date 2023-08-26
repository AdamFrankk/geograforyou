<script setup lang="ts">
import { reactive, watch } from "vue"

import { AuthText } from "@/features/auth/ui"
import { Button } from "@/shared/uikit/buttons"
import { Input } from "@/shared/uikit/inputs"
import { useVuelidate } from "@vuelidate/core"
import { helpers, minLength, required } from "@vuelidate/validators"
import type { AuthDto_Passwords, AuthStateProps } from "../../model"
import { regexPassword, samePassword } from "@/features/auth/lib"
// Props and Emits
interface Emits {
  (e: "update:next"): void
  (e: "update:prev"): void
  (e: "push:data", data: Omit<AuthDto_Passwords, "confirmPassword">): void
}
const props = defineProps<AuthStateProps>()
const emit = defineEmits<Emits>()

const authData_passwords = reactive<AuthDto_Passwords>({
  password: "",
  confirmPassword: ""
})

const rules = {
  password: {
    required: helpers.withMessage("Это поле не может быть пустым", required),
    minLength: helpers.withMessage("Минимальная длина пароля - 8 символов", minLength(8)),
    samePassword: helpers.withMessage("Пароли не совпадают", () =>
      samePassword(authData_passwords)
    ),
    regexPassword: helpers.withMessage(
      "Пароль должен содержать заглавные и строчные буквы, цифру и специальный символ",
      regexPassword
    )
  },
  confirmPassword: {
    required: helpers.withMessage("Это поле не может быть пустым", required),
    minLength: helpers.withMessage("Минимальная длина пароля - 8 символов", minLength(8)),
    samePassword: helpers.withMessage("Пароли не совпадают", () =>
      samePassword(authData_passwords)
    ),
    regexPassword: helpers.withMessage(
      "Пароль должен содержать заглавные и строчные буквы, цифру и специальный символ",
      regexPassword
    )
  }
}

const v$ = useVuelidate(rules, authData_passwords, { $lazy: true, $autoDirty: true })

// Watchers
watch(authData_passwords, (newData) => {
  emit("push:data", { password: newData.password })
})

function toNextStep() {
  v$.value.$validate()
  if (!v$.value.$invalid) {
    emit("update:next")
  }
}
</script>

<template>
  <div>
    <!-- Поля по email-у -->
    <div v-if="props.activeAuthType === 'email'">
      <!-- Экран после перехода по ссылки из письма -->
      <AuthText class="auth-form__text">
        Придумайте пароль, который должен состоять из восьми или более символов латинского алфавита,
        содержать заглавные и строчные буквы, цифры.
      </AuthText>
      <Input
        class="auth-form__input"
        placeholder="Введите пароль"
        type="password"
        :state="v$?.password.$silentErrors.length !== 0 ? 'error' : null"
        :stateInfo="v$?.password.$silentErrors"
        v-model:input-value="authData_passwords.password"
        @keyup.enter="toNextStep()"
      />
      <Input
        class="auth-form__input auth-form__input--last"
        placeholder="Повторите пароль"
        type="password"
        :state="v$?.confirmPassword.$silentErrors.length !== 0 ? 'error' : null"
        :stateInfo="v$?.confirmPassword.$silentErrors"
        v-model:input-value="authData_passwords.confirmPassword"
        @keyup.enter="toNextStep()"
      />
      <Button class="auth-form__button" type="button" @click="toNextStep()" :disabled="v$.$invalid">
        Продолжить
      </Button>
    </div>
    <!-- Поля по телефону -->
    <div v-if="props.activeAuthType === 'phone'">
      <AuthText class="auth-form__text bold" bold>Введите код безопасности</AuthText>
      <AuthText class="auth-form__text thin">
        Введите 4-х значный код, который мы выслали на
        <a href="tel:+7(988)123-45-67">+7 (988) 123-45-67</a>
      </AuthText>
      <InputCode class="auth-form__input auth-form__input--code" />
      <div class="auth-form__resend">
        <a class="link">Отправить код еще раз</a>
      </div>
      <Button class="auth-form__button" type="button" @click="toNextStep()"> Продолжить </Button>
      <Button color="white" class="auth-form__button" type="button" @click="emit('update:prev')">
        Изменить номер
      </Button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
@import "../index.pcss";
</style>
