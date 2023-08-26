<script setup lang="ts">
import { ref, onMounted } from "vue"
import type { TabItem, TabsEmits, TabsProps } from "@/shared/api/common/tabs"
// Props and Emits
const emit = defineEmits<TabsEmits>()
const props = defineProps<TabsProps>()
// Variables
const activeTab = ref<TabItem | null>(null)
// Lifecycles
onMounted(() => {
  activeTab.value = props.activeTab
})
// Methods
function changeTab(tab: TabItem) {
  activeTab.value = tab
  emit("update:changeTab", tab)
}
</script>

<template>
  <div class="sorting-tabs">
    <template v-for="sortTab in props.tabs" :key="sortTab.name">
      <button
        class="sorting-tabs__item"
        :class="{ 'sorting-tabs__item--active': activeTab?.name === sortTab.name }"
        @click="changeTab(sortTab)"
      >
        {{ sortTab.title }}
      </button>
    </template>
  </div>
</template>

<style scoped lang="postcss">
.sorting-tabs {
  @apply flex p-[4px] gap-[8px] bg-color-grey-50 rounded-default;
  &__item {
    @apply relative py-[8px] px-[12px] rounded-default text-[12px] leading-[21px] font-semibold text-color-grey-500;
    &--active {
      @apply bg-white text-secondary-color;
    }
    &::after {
      content: "";
      @apply h-[10px] w-[1px] bg-color-grey-200 absolute right-[-4px] top-[13px];
    }
  }
}
</style>
