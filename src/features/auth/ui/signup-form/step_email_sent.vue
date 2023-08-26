<script setup lang="ts">
import { EmailSent } from ".."
interface Props {
  mail: string
}
const props = defineProps<Props>()
</script>

<template>
  <EmailSent
    text="перейдите по ссылке
        в письме, чтобы зарегистрироваться"
    :mail="props.mail"
  />
</template>

<style scoped lang="postcss">
@import "../index.pcss";
</style>
