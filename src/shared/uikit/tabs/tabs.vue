<script lang="ts" setup>
import { ref } from "vue"
import type { TabItem, TabsEmits, TabsProps } from "@/shared/api/common/tabs"
// Emits and Props
const emit = defineEmits<TabsEmits>()
const props = defineProps<TabsProps>()
// Variables
const activeTab = ref<TabItem>(props.activeTab)
// Methods
const changeTab = (_item: TabItem): void => {
  activeTab.value = _item
  emit("update:changeTab", _item)
}
</script>

<template>
  <div class="tabs">
    <template v-for="item in props.tabs" :key="item.name">
      <div
        :class="[`tabs__tab ${item.name == activeTab.name ? 'tabs__tab_active' : ''}`]"
        @click="changeTab(item)"
      >
        {{ item.title }}
      </div>
    </template>
  </div>
</template>

<style lang="postcss" scoped>
.tabs {
  @apply flex;
  &__tab {
    @apply mr-[20px];
    @apply text-[16px] text-color-grey-70 font-semibold text-center tracking-[0.08px] cursor-pointer pt-[8px] pb-[14px] px-[16px];
    &::after {
      content: "";
      @apply absolute bottom-0 left-0 w-full h-0 bg-primary-color transition ease-in duration-300;
    }
    &:last-child {
      @apply mr-[0px];
    }
    &_active {
      @apply relative text-secondary-color;
      &::after {
        @apply h-[2px] transition ease-in duration-300;
      }
    }
  }
}
</style>
