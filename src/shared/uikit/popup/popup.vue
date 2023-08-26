<script setup lang="ts">
import { Icon } from "@/shared/uikit/icons"
import { ref, onMounted } from "vue"
import type { PopupEmits, PopupProps } from "@/shared/api/common/popup"
import { ButtonIcon } from "@/shared/uikit/buttons"

// Props and emits
const emit = defineEmits<PopupEmits>()
const props = withDefaults(defineProps<PopupProps>(), {
  bgColor: "white",
  width: 640,
  isOpen: false
})

// Variables
const containerBodyColor = ref<string | undefined>()
const containerWidth = ref<string | undefined>()

onMounted(() => {
  containerWidth.value = `${props.width}px`
  containerBodyColor.value = `bg-${props.bgColor}`
})

// Methods
function closePopup() {
  emit("close")
}
</script>

<template>
  <div class="popup" v-if="props.isOpen">
    <div class="popup__bg" @click="closePopup"></div>
    <div class="popup__container">
      <div class="popup__container-head">
        <div class="popup__head-top">
          <h3 class="popup__title" v-if="$slots.title">
            <slot name="title"></slot>
          </h3>
          <ButtonIcon
            class="popup__close"
            name="close"
            type="common"
            size="extrasmall"
            color="grey"
            :h="16"
            :w="16"
            @click="closePopup"
          />
        </div>
        <div class="popup__head-bottom" v-if="$slots.info">
          <slot name="info"></slot>
        </div>
      </div>
      <div class="popup__container-body" :class="containerBodyColor">
        <slot></slot>
      </div>
      <div class="popup__container-bottom" v-if="$slots.bottom">
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.popup {
  @apply fixed z-[110] top-0 left-0 w-screen h-screen flex items-center justify-center;
  &__bg {
    @apply w-full h-full bg-[rgba(45,55,72,0.60)] backdrop-blur-[3px] absolute z-0;
  }
  &__container {
    @apply relative bg-white-color overflow-hidden m-auto rounded-[12px] mx-[20px] w-[v-bind('containerWidth')];
  }
  &__container-head {
    @apply p-default py-[20px] border-b-[1px] border-solid border-color-grey-100;
  }
  &__head-top {
    @apply flex justify-between items-center;
  }
  &__head-bottom {
    @apply flex justify-between items-center;
  }
  &__container-body {
    @apply p-default max-h-[calc(100vh-152px)] overflow-auto;
  }
  &__container-bottom {
    @apply p-default flex justify-between border-t-[1px] border-solid border-color-grey-100;
  }
  &__title {
    @apply text-secondary-color font-bold leading-[150%];
  }
  &__close {
    @apply rounded-full stroke-main-icon;
  }
}
</style>
