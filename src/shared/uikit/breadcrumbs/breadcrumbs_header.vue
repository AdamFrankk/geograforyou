<script setup lang="ts">
interface BreadcrumbsProps {
  active: string
  prevs?: Array<string>
}

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  prevs: () => ["Главная"]
})
</script>

<template>
  <div class="breadcrumbs">
    <span class="breadcrumb" v-for="item$ in props.prevs" :key="item$">{{ item$ }}</span>
    <span class="breadcrumb breadcrumb--active" v-if="props.active"> {{ props.active }}</span>
  </div>
</template>

<style scoped lang="postcss">
.breadcrumbs {
  @apply flex;
  .breadcrumb {
    @apply text-[12px] leading-[21px] text-color-grey-40 font-normal mr-[5px];
    &--active {
      @apply text-secondary-color;
    }
    &::before {
      content: "/";
      @apply mr-[5px] text-[12px];
    }
    &:first-child::before {
      content: "";
      @apply mr-0;
    }
  }
}
</style>
