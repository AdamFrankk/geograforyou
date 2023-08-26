<script lang="ts" setup>
import type { InputEmits, SearchInputProps } from "@/shared/api/common/inputs"
import { Icon } from "@/shared/uikit/icons"

// Props and Emits
const props = defineProps<SearchInputProps>()
const emit = defineEmits<InputEmits>()
</script>

<template>
  <div class="sm-input sm-input--search">
    <div class="sm-input__body sm-input--search__body">
      <Icon :w="20" :h="20" type="common" name="search" class="sm-input--search__icon" />
      <div class="sm-input--search__field">
        <input
          :placeholder="props.placeholder"
          :value="props.inputValue"
          @input="emit('update:inputValue', ($event.target as HTMLTextAreaElement).value)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import "./index.pcss";
.sm-input--search {
  @apply w-[v-bind(props.width)];
  &__body {
    @apply pr-[16px] py-[12px] min-h-[44px] max-h-[44px] pl-[48px];
    &:hover {
      @apply bg-color-grey-100 border-color-grey-300;
    }
  }
  &__icon {
    @apply mr-[4px] absolute left-[16px] text-black text-[16px] font-normal leading-[16px] flex items-center;
  }
  &__field {
    @apply text-[14px] font-normal leading-[30px] whitespace-nowrap text-ellipsis text-color-grey-70 w-full;
    input {
      @apply text-black w-full;
      &:disabled {
        @apply text-color-grey-40 cursor-not-allowed;
        &::placeholder {
          @apply text-color-grey-300;
        }
      }
    }
  }
}
</style>
