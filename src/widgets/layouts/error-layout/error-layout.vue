<script setup lang="ts"></script>

<template>
  <div class="error-layout">
    <div class="error-layout__bg">
      <img
        class="error-layout__bg-img rotating-animation"
        src="@/app/static/images/circles.png"
        alt=""
      />
    </div>
    <div class="error-layout__body">
      <div class="error-layout__code">
        <slot name="code"></slot>
      </div>
      <div class="error-layout__title">
        <slot name="title"></slot>
      </div>
      <div class="error-layout__subtitle">
        <slot name="subtitle"></slot>
      </div>
      <div class="error-layout__to-main">
        <router-link class="error-layout__link link--button" :to="{ name: 'test' }">
          На главную
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.error-layout {
  @apply w-screen flex items-center justify-center h-screen bg-green-950 overflow-hidden;
  &__bg {
    @apply select-none w-full h-screen flex items-center justify-end absolute z-[10] left-0 opacity-[0.3];
  }
  &__bg-img {
    @apply select-none w-full h-full absolute object-cover flex items-center transition ease-in duration-700;
  }
  &__body {
    @apply absolute z-[20] text-white;
  }
  &__code {
    @apply text-[100px] font-black leading-normal;
  }
  &__title {
    @apply text-[36px] font-bold leading-normal tracking-[0.36px] mb-[24px];
  }
  &__subtitle {
    @apply text-[16px] font-normal leading-[150%] mb-[calc(32px+8px)];
  }
  &__to-main {
  }
}
</style>
