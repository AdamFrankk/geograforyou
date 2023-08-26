<script setup lang="ts">
import type { ErrorObject } from "@vuelidate/core"
import { onMounted, ref } from "vue"
import { Icon } from "@/shared/uikit/icons"
import type { SelectInputProps, SelectItem } from "@/shared/api/common/inputs"

const props = withDefaults(defineProps<SelectInputProps>(), {
  activeItem: null,
  items: () => {
    return [
      { id: 1, title: "ЖК “Каравелла Португалии”" },
      { id: 2, title: "ЖК “Каравелла Италии”" }
    ]
  }
})

const openDropdown = ref<boolean>(false)

const activeSelectItem = ref<SelectItem | null | undefined>(null)

onMounted(() => {
  activeSelectItem.value = props.activeItem
})

function toggleDropdown() {
  openDropdown.value = !openDropdown.value
}

function changeActiveItem(item: SelectItem) {
  activeSelectItem.value = item
  openDropdown.value = false
}
</script>

<template>
  <div
    class="sm-input sm-input--select"
    :class="[
      props.state ? `sm-input--${props.state}` : null,
      props.size ? `sm-input--${props.size}` : null,
      props.bgColor ? `sm-input--${props.bgColor}` : null
    ]"
  >
    <div class="sm-input__input sm-input--select__active-item" @click="toggleDropdown()">
      <span class="sm-input--select__placeholder" v-if="activeSelectItem === null">
        {{ props.placeholder }}
      </span>
      <span v-else>{{ activeSelectItem?.title }}</span>
      <Icon
        class="sm-input--select__chevron"
        :class="{ 'sm-input--select__chevron--open': openDropdown }"
        name="chevron"
        type="common"
        :h="18"
        :w="18"
      />
    </div>
    <div class="sm-input--select__items" v-if="openDropdown">
      <template v-for="item in props.items" :key="item.id">
        <div class="sm-input--select__item" @click="changeActiveItem(item)">{{ item.title }}</div>
      </template>
    </div>
    <div class="sm-input__bottom">
      <span v-if="props.state === 'error'" class="sm-input__error">
        {{ props.state === "error" ? (stateInfo as ErrorObject[])[0].$message : null }}</span
      >
      <span v-else-if="props.description" class="sm-input__description">Информация</span>
    </div>
  </div>
</template>

<style scoped lang="postcss">
@import "./index.pcss";
.sm-input--select {
  @apply relative cursor-pointer;
  &__placeholder {
    @apply text-color-grey-40;
  }
  &__active-item {
    @apply w-full rounded-default bg-color-grey-50 p-[10px_20px];
    @apply flex justify-between items-center overflow-hidden select-none text-color-grey-500;
    @apply text-ellipsis whitespace-nowrap text-left text-[16px] leading-[21px] border-solid border-[1px] border-color-grey-100;
    &:hover {
      @apply bg-color-grey-100 border-color-grey-300;
    }
  }
  &__chevron {
    @apply rotate-[-90deg] stroke-secondary-color;
    &--open {
      @apply rotate-[-270deg];
    }
  }
  &__items {
    @apply py-[12px] w-full absolute bg-white z-[100] top-[calc(100%+8px)];
    @apply rounded-default  shadow-[0_10px_30px_0_rgba(70,87,147,0.12)];
  }
  &__item {
    @apply p-[10px_20px] h-[56px] text-[16px] text-black text-left leading-[21px] select-none border-b-[1px] border-solid border-b-color-grey-200 flex items-center;
    &:last-child {
      @apply border-0;
    }
    &:hover {
      @apply bg-color-grey-50;
    }
  }
  &.sm-input {
    &--small {
      .sm-input--select__items {
        @apply py-[8px];
      }
      .sm-input--select__item {
        @apply h-[48px];
      }
    }
    &--extrasmall {
      .sm-input--select__active-item {
        @apply h-[40px] text-[14px];
      }
      .sm-input--select__items {
        @apply py-[8px];
      }
      .sm-input--select__item {
        @apply h-[40px] text-[14px];
      }
    }
    &--white {
      .sm-input--select__active-item {
        @apply border-color-grey-200 bg-white text-secondary-color;
      }
    }
  }
}
</style>
