<script setup lang="ts">
import { reactive, watch } from "vue"

import type { AuthType } from "@/shared/api"
import { Button } from "@/shared/uikit/buttons"
import { Input } from "@/shared/uikit/inputs"
import { useVuelidate } from "@vuelidate/core"
import { email, helpers, required } from "@vuelidate/validators"
import type { AuthStateProps, AuthDto_Main } from "../../model"

// Props and Emits
interface Emits {
  (e: "change:swipeTo", auth_type: AuthType): void
  (e: "update:next"): void
  (e: "push:data", data: AuthDto_Main): void
}
const props = defineProps<AuthStateProps>()
const emit = defineEmits<Emits>()

const authDataStepName = reactive<AuthDto_Main>({
  firstname: "", // Имя
  lastname: "", // Отчество
  mail: "",
  phone: ""
})

const rules_name = {
  firstname: { required: helpers.withMessage("Это поле не может быть пустым", required) },
  lastname: { required: helpers.withMessage("Это поле не может быть пустым", required) }
}

const rules_email = {
  mail: {
    required: helpers.withMessage("Это поле не может быть пустым", required)
  }
}

const v_name$ = useVuelidate(rules_name, authDataStepName, { $lazy: true, $autoDirty: true })
const v_email$ = useVuelidate(rules_email, authDataStepName, { $lazy: true, $autoDirty: true })

// Watchers
watch(authDataStepName, (newData) => {
  emit("push:data", newData)
})
// Methods
function toNextStep() {
  v_name$.value?.$validate()
  if (!v_name$.value.$invalid) {
    if (props.activeAuthType === "email") {
      v_email$.value?.$validate()
      if (!v_email$.value.$invalid) {
        emit("update:next")
      }
    } else {
      return false
    }
  }
}
</script>

<template>
  <div>
    <Input
      class="auth-form__input"
      placeholder="Имя"
      type="text"
      @keyup.enter="toNextStep()"
      v-model:input-value="authDataStepName.firstname"
      :state="v_name$?.firstname.$silentErrors.length !== 0 ? 'error' : null"
      :stateInfo="v_name$?.firstname.$silentErrors"
    />
    <Input
      class="auth-form__input"
      placeholder="Фамилия"
      type="text"
      :state="v_name$?.lastname.$silentErrors.length !== 0 ? 'error' : null"
      :stateInfo="v_name$?.lastname.$silentErrors"
      v-model:input-value="authDataStepName.lastname"
      @keyup.enter="toNextStep()"
    />
    <!-- Поля по email-у -->
    <div v-if="props.activeAuthType === 'email'">
      <Input
        class="auth-form__input auth-form__input--last"
        placeholder="Email"
        type="email"
        :state="v_email$?.mail?.$silentErrors.length !== 0 ? 'error' : null"
        :stateInfo="v_email$?.mail?.$silentErrors"
        v-model:input-value="authDataStepName.mail"
        @keyup.enter="toNextStep()"
      />
      <!-- <Button color="white" class="auth-form__button" @click="emit('change:swipeTo', 'phone')">
        Регистрация через телефон
      </Button> -->
      <Button
        class="auth-form__button"
        type="button"
        @click="toNextStep()"
        :disabled="v_email$?.$invalid || v_name$.$invalid"
      >
        Продолжить
      </Button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
@import "../index.pcss";
</style>
