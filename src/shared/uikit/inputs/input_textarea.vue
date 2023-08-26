<script lang="ts" setup>
import type { InputEmits, InputProps } from "@/shared/api/common/inputs"
import type { ErrorObject } from "@vuelidate/core"

/* Props and Emits */
const emit = defineEmits<InputEmits>()
const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  size: "normal",
  stateInfo: null
})
</script>

<template>
  <div
    class="sm-input sm-input--textarea"
    :class="{
      'sm-input--error': props.state === 'error',
      'sm-input--success': props.state === 'success'
    }"
  >
    <div class="sm-input__body">
      <div class="sm-input__field">
        <label class="sm-input__label" v-if="props.label"></label>
        <textarea
          class="sm-input--textarea__input sm-input__input"
          :placeholder="props.placeholder"
          @input="emit('update:inputValue', ($event.target as HTMLTextAreaElement).value)"
          @blur="emit('blur')"
        ></textarea>
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
