<script setup lang="ts">
import { Icon } from "@/shared/uikit/icons/"
</script>

<template>
  <div class="navbar">
    <div class="navbar__body">
      <router-link
        class="navbar__link"
        :to="{ name: 'test' }"
        exact-active-class="navbar__link--active"
      >
        <Icon name="earth" type="navigation" :h="24" :w="24" />
        <span class="navbar__link-text">Карта</span>
      </router-link>
      <router-link
        exact-active-class="navbar__link--active"
        class="navbar__link"
        :to="{ name: 'test' }"
      >
        <Icon name="map" type="navigation" :h="24" :w="24" />
        <span class="navbar__link-text">Места</span>
      </router-link>
      <router-link
        exact-active-class="navbar__link--active"
        class="navbar__link"
        :to="{ name: 'test' }"
      >
        <Icon name="hotel" type="navigation" :h="24" :w="24" />
        <span class="navbar__link-text">Жильё</span>
      </router-link>
      <router-link
        exact-active-class="navbar__link--active"
        class="navbar__link"
        :to="{ name: 'profile' }"
      >
        <Icon name="account" type="navigation" :h="24" :w="24" />
        <span class="navbar__link-text">Профиль</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.navbar {
  @apply p-[12px] w-full fixed bottom-0 left-0 rounded-t-[12px] bg-primary-color;

  &__body {
    @apply flex justify-between;
  }
  &__link {
    @apply p-[8px] px-[16px] bg-transparent flex rounded-default flex-col items-center stroke-white fill-white;
    &--active {
      @apply border-white;
    }
  }
  &__link-text {
    @apply font-semibold text-[12px] mt-[2px] text-white;
  }
}
</style>
