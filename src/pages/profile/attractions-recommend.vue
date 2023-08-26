<script lang="ts" setup>
import { ref } from "vue"

import { useAuthStore } from "@/entities/session"
import { Button } from "@/shared/uikit/buttons"
import { BaseLayout } from "@/widgets/layouts"
import { MyProfileSection } from "@/widgets/profile"

import { Container, Draggable } from "vue-dndrop"

const authStore = useAuthStore()
</script>

<template>
  <BaseLayout>
    <div class="recommend-page">
      <h2 class="recommend-page__title">Рекомендации по местам</h2>
      <p class="recommend-page__description">
        Раставьте в порядке убывания что больше хотели бы посетить.
      </p>
      <Container class="recommend-page__body">
        <Draggable class="recommend-page__item">
          <img
            src="https://artyhomes.ru/wp-content/uploads/2021/03/gotika-v-sovremennoy-arhitekture-7.jpg"
            alt=""
          />
          <div class="recommend-page__text">Старинная Архитектура</div>
        </Draggable>
        <Draggable class="recommend-page__item">
          <img
            src="https://enotnavolge.ru/wp-content/uploads/d/4/9/d49d55dd6eca300608fdbbae28c9d30d.jpeg"
            alt=""
          />
          <div class="recommend-page__text">Музеи</div>
        </Draggable>
        <Draggable class="recommend-page__item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9_%D0%B4%D0%BE%D0%BC_%D1%83%D1%81%D0%B0%D0%B4%D1%8C%D0%B1%D1%8B_%D0%91%D1%80%D1%8F%D0%BD%D1%87%D0%B0%D0%BD%D0%B8%D0%BD%D0%BE%D0%B2%D1%8B_%D0%B8_%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F_%D0%BA%D0%BB%D1%83%D0%BC%D0%B1%D0%B0.jpg/1200px-%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9_%D0%B4%D0%BE%D0%BC_%D1%83%D1%81%D0%B0%D0%B4%D1%8C%D0%B1%D1%8B_%D0%91%D1%80%D1%8F%D0%BD%D1%87%D0%B0%D0%BD%D0%B8%D0%BD%D0%BE%D0%B2%D1%8B_%D0%B8_%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F_%D0%BA%D0%BB%D1%83%D0%BC%D0%B1%D0%B0.jpg"
            alt=""
          />
          <div class="recommend-page__text">Дома / Усадьбы</div>
        </Draggable>
        <Draggable class="recommend-page__item">
          <img
            src="https://pic.rutubelist.ru/video/8d/6f/8d6fe14819b309ec8d9b5f1c27461f81.jpg"
            alt=""
          />
          <div class="recommend-page__text">Памятники</div>
        </Draggable>
      </Container>
      <div class="recommend-page__buttons">
        <Button class="recommend-page__skip" bold="semibold">Далее</Button>
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
    @apply flex flex-col mb-[20px] justify-center;
  }
  &__item {
    @apply w-full min-h-[90px] max-h-[90px] cursor-pointer mb-[20px] relative overflow-hidden !rounded-[20px];
    img {
      @apply w-full max-h-[90px] object-cover rounded-[20px];
    }
  }
  &__text {
    @apply absolute top-0 left-0 font-bold text-left p-[24px] text-xl text-white w-full h-full bg-[#00000077] rounded-[20px];
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
