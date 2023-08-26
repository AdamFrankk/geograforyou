<script lang="ts" setup>
import { ref } from "vue"

import { useAuthStore } from "@/entities/session"
import { Button } from "@/shared/uikit/buttons"
import { BaseLayout } from "@/widgets/layouts"
import { MyProfileSection } from "@/widgets/profile"

const authStore = useAuthStore()
</script>

<template>
  <BaseLayout>
    <div class="recommend-page">
      <h2 class="recommend-page__title">Рекомендации по ресторанам</h2>
      <p class="recommend-page__description">Что вам нравится из следующих вариантов?</p>
      <div class="recommend-page__body">
        <div class="recommend-page__item">
          <img
            src="https://avatars.mds.yandex.net/get-altay/200322/2a0000015b16d7eb6a957fdba8d57d7f7b46/XXL"
            alt=""
          />
        </div>
        <div class="recommend-page__item">
          <img
            src="https://tacon.ru/wp-content/uploads/f/5/4/f54315ef7651e0917b669b99bb101fce.jpeg"
            alt=""
          />
        </div>
        <div class="recommend-page__item">
          <img src="https://w.forfun.com/fetch/44/44de18bc263f0302137577f645887d5e.jpeg" alt="" />
        </div>
        <div class="recommend-page__item">
          <img
            src="https://kartinkin.net/uploads/posts/2021-08/1630004915_18-kartinkin-com-p-kombo-nabori-fast-fud-yeda-krasivo-foto-20.jpg"
            alt=""
          />
        </div>
        <div class="recommend-page__item">
          <img
            src="http://otvet.imgsmail.ru/download/u_4b8773d9ed295133adb962fc39d9c465_800.jpg"
            alt=""
          />
        </div>
        <div class="recommend-page__item">
          <img
            src="https://www.legendapress.ru/wp-content/uploads/2019/06/%D0%BF%D0%BB%D0%BE%D0%B25-1024x768.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="recommend-page__buttons">
        <Button class="recommend-page__skip" color="white" bold="semibold">Пропустить</Button>
      </div>
    </div>
  </BaseLayout>
</template>

<style lang="postcss" scoped>
.recommend-page {
  @apply p-default;
  &__title {
    @apply text-xl font-bold text-center mb-[20px];
  }
  &__description {
    @apply text-[14px] text-color-grey-500 mb-[24px];
  }
  &__body {
    @apply flex gap-[12px] flex-wrap mb-[36px] justify-center;
  }
  &__item {
    @apply w-[calc(50%-6px)] max-h-[200px] cursor-pointer;
    img {
      @apply w-full h-full object-cover rounded-[20px];
    }
  }
  &__buttons {
    @apply flex gap-[12px] justify-center;
  }
  &__next,
  &__skip {
    @apply w-[50%];
  }
}
</style>
