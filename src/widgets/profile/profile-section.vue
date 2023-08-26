<template>
  <div class="my-profile">
    <div class="my-profile__top">
      <h2 class="my-profile__name">Кирилл Ефимов</h2>
      <div class="my-profile__info">
        <p class="my-profile__description">
          Здесь будут отображены ваши личные рекомендации по местам.
        </p>
        <p class="my-profile__description">
          Пройдите опрос, чтобы в разделах выводилось то, что вы хотите!
        </p>
      </div>
      <div class="my-profile__priorites">
        <div class="my-profile__prioritet my-profile__restaurants">
          <h3 class="my-profile__prioritet-title">Рестораны/Кафе</h3>
          <div class="my-profile__prioritet-button">
            <router-link :to="{ name: 'restaurants-recommends' }">
              <Button>Где покушать?</Button>
            </router-link>
          </div>
        </div>
        <div class="my-profile__prioritet my-profile__attractions">
          <h3 class="my-profile__prioritet-title">Достопримечательности</h3>
          <div class="my-profile__prioritet-button">
            <router-link :to="{ name: 'attractions-recommends' }">
              <Button>Что посмотреть?</Button>
            </router-link>
          </div>
        </div>
        <div class="my-profile__prioritet my-profile__hotels">
          <h3 class="my-profile__prioritet-title">Отели</h3>
          <div class="my-profile__prioritet-button">
            <router-link :to="{ name: 'hotels-recommends' }">
              <Button>Где жить?</Button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/shared/uikit/buttons"
</script>

<style scoped lang="postcss">
.my-profile {
  @apply p-default;
  &__name {
    @apply text-2xl font-bold text-center mb-[20px];
  }
  &__info {
    @apply mb-[24px] text-left;
  }
  &__description {
    @apply text-[14px] text-color-grey-500;
  }
  &__prioritet {
    @apply mb-[20px];
  }
  &__prioritet-title {
    @apply text-xl font-bold text-left mb-[16px];
  }
}
</style>
