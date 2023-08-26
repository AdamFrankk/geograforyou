<script lang="ts" setup>
import { ref } from "vue"
import type { AuthType } from "@/shared/api"
// Interfaces
interface Item {
  name: AuthType
  title: String
}
interface Props {
  tabs: Array<Item>
  activeTab: AuthType
}
interface Emits {
  (e: "changeTab", authType: AuthType): void
}
// Emits and Props
const emit = defineEmits<Emits>()
const props = defineProps<Props>()
// Variables
const activeTab = ref<AuthType>(props.activeTab)
// Methods
const change = (_item: Item): void => {
  activeTab.value = _item.name
  emit("changeTab", _item.name)
}
</script>

<template>
  <div class="auth-tabs">
    <template v-for="item in props.tabs" :key="item.name">
      <div
        :class="[`auth-tabs__tab ${item.name == activeTab ? 'auth-tabs__tab_active' : ''}`]"
        @click="change(item)"
      >
        {{ item.title }}
      </div>
    </template>
  </div>
</template>

<style lang="postcss" scoped>
.auth-tabs {
  @apply flex;
  &__tab {
    @apply text-[16px] text-color-grey-70 font-semibold text-center tracking-[0.08px] cursor-pointer pt-[8px] pb-[14px] px-[16px];
    &::after {
      content: "";
      @apply absolute bottom-0 left-0 w-full h-0 bg-primary-color;
      transition: all 0.25s ease-in;
    }
    &:first-child {
      @apply mr-[20px];
    }
    &_active {
      @apply relative text-secondary-color;
      &::after {
        @apply h-[2px];
        transition: all 0.25s ease-in;
      }
    }
  }
}
</style>
