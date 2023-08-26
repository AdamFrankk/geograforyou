<script lang="ts" setup>
import { AuthText } from "."
interface Props {
  mail: string
  text?: string
  title?: string
}
const props = withDefaults(defineProps<Props>(), { title: "Письмо отправлено" })
</script>

<template>
  <div class="auth-form__mail-sent">
    <AuthText class="auth-form__text" bold> {{ props.title }} </AuthText>
    <AuthText class="auth-form__text auth-form__text--medium" v-if="props.text">
      Проверьте ваш E-mail <a :href="`mailto:${props.mail}`">{{ props.mail }}</a>
      {{ props.text ? `и ${props.text}` : "" }}
    </AuthText>
    <img class="auth-form__mail-img" src="@/app/static/images/undraw_mail_sent.png" alt="" />
  </div>
</template>

<style lang="postcss" scoped>
@import "./index.pcss";
</style>
