<script lang="ts" setup>
import type { InputEmits, InputProps } from "@/shared/api/common/inputs"
import type { ErrorObject } from "@vuelidate/core"
import { Icon } from "@/shared/uikit/icons"
import { onMounted, ref } from "vue"

/* Props and Emits */
const emit = defineEmits<InputEmits>()
const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  size: "normal",
  stateInfo: null
})
const inputType = ref("text")

onMounted(() => {
  inputType.value = props.type
})

function togglePasswordVisible() {
  if (inputType.value === "password") {
    inputType.value = "text"
  } else {
    inputType.value = "password"
  }
}
</script>

<template>
  <div
    class="sm-input"
    :class="{
      'sm-input--error': props.state === 'error',
      'sm-input--success': props.state === 'success'
    }"
  >
    <div class="sm-input__body">
      <div class="sm-input__field">
        <label class="sm-input__label" v-if="props.label"></label>
        <input
          class="sm-input__input"
          :type="inputType"
          :placeholder="props.placeholder"
          :value="props.inputValue"
          @input="emit('update:inputValue', ($event.target as HTMLTextAreaElement).value)"
          @blur="emit('blur')"
        />
      </div>
      <div class="sm-input__right-icon" v-if="props.state === 'success'">
        <Icon :h="24" :w="24" type="common" name="verify-checked" class="sm-input__right-icon" />
      </div>
      <div class="sm-input__eye" @click="togglePasswordVisible" v-if="props.type === 'password'">
        <Icon
          :h="24"
          :w="24"
          type="common"
          name="password-eye"
          class="sm-input__eye-icon"
          v-if="inputType === 'text'"
        />
        <Icon
          :h="24"
          :w="24"
          type="common"
          name="password-eye-hide"
          class="sm-input__eye-icon"
          v-else
        />
      </div>
    </div>
    <div class="sm-input__bottom">
      <span v-if="props.state === 'error'" class="sm-input__error">
        {{ props.state === "error" ? (stateInfo as ErrorObject[])[0].$message : null }}</span
      >
      <span v-else-if="props.description" class="sm-input__description">Информация</span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import "./index.pcss";
</style>
