<script lang="ts" setup>
import type { PreloaderProps } from "@/shared/api"
import { Logotype } from "@/shared/uikit/logotype"

const TRANSITION_FADE_LEFT = "fade-left"
const TRANSITION_FADE_RIGHT = "fade-right"
const TRANSITION_FADE_UP = "fade-up"
const TRANSITION_FADE_DOWN = "fade-down"

const transitionMap: any = {
  [TRANSITION_FADE_LEFT]: { transform: "translate(-100%, 0)" },
  [TRANSITION_FADE_RIGHT]: { transform: "translate(100%, 0)" },
  [TRANSITION_FADE_UP]: { transform: "translate(0, -100%)" },
  [TRANSITION_FADE_DOWN]: { transform: "translate(0, 100%)" },
  default: { transform: "transform(-100%, 0)" }
}

const props = withDefaults(defineProps<PreloaderProps>(), {
  loadingSpeed: 15,
  overflowActive: true,

  transitionSpeed: 2000,

  transitionType: "fade-right"
})

import { computed, onMounted, onBeforeMount, ref, watchEffect } from "vue"

const emit = defineEmits(["loading-is-over", "transition-is-over"])

var percent = ref(0)

const componentDisplay = ref(true)

const preloaderTransitionSpeed = computed(() => {
  return { transition: `all ${props.transitionSpeed}ms ease-in-out` }
})

const preloaderTransitionType = computed(() => {
  if (percent.value >= 100) {
    return transitionMap[props.transitionType] || transitionMap.default
  }
  return false
})

watchEffect(() => {
  if (percent.value < 100) {
    setTimeout(() => {
      percent.value += 1
    }, props.loadingSpeed)
  } else {
    transitionIsOver()
  }
})

onBeforeMount(() => {
  if (props.overflowActive) setOverflowHidden()
})

onMounted(() => {
  percent.value = percent.value += 1
})

function setOverflowHidden() {
  document.body.style.overflow = "hidden"
}

function transitionIsOver() {
  setTimeout(() => {
    emit("transition-is-over")
    componentDisplay.value = false
  }, props.transitionSpeed)
}
</script>

<template>
  <div>
    <div
      class="preloader"
      v-if="componentDisplay"
      :style="[preloaderTransitionSpeed, preloaderTransitionType]"
    >
      <Logotype type="white" absolute />
    </div>
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped>
.preloader {
  @apply w-screen flex items-center justify-center h-screen bg-green-950 absolute top-0 left-0 overflow-hidden z-[100];
  &__img {
    @apply select-none flex items-center w-full absolute  transition ease-in duration-700;
  }
}
</style>
