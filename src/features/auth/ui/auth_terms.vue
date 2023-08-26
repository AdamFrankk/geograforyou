<template>
  <AuthText type="small">
    Продолжая, вы соглашаетесь с
    <router-link class="auth-terms__link" :to="{ name: 'test' }">
      Условиями Обслуживания
    </router-link>
    и
    <router-link class="auth-terms__link" :to="{ name: 'test' }">
      Политикой Конфиденциальности
    </router-link>
    .
  </AuthText>
</template>

<script setup lang="ts">
import AuthText from "./auth_text.vue"
</script>

<style scoped lang="postcss">
.auth-terms {
  &__link {
    @apply font-bold;
  }
}
</style>
