<script setup lang="ts">
import { YandexMap, YandexMarker } from "vue-yandex-maps"

import { mapSettings } from "@/shared/api/map"
import { ref } from "vue"

const restaurantMark = ref<any>({
  slug: "kreml",
  id: 1213123123,
  coordinate: [46.349427, 48.031019],
  address: "остров Центральный",
  title: "Астраханский кремль",
  description: "Кафе",
  images: []
})

const markOptions = {
  iconLayout: "default#image",
  iconImageHref: "src/app/static/icons/attraction-mark.svg",
  iconImageSize: [40, 40],
  iconImageOffset: [-19, -44]
}
</script>

<template>
  <div class="ui-map">
    <div class="ui-map__container">
      <YandexMap
        :settings="mapSettings"
        :coordinates="[46.3, 48.0523233]"
        :zoom="8"
        :controls="[]"
        ymap-class="geo-map"
      >
        <YandexMarker
          :key="restaurantMark.slug"
          :type="'Point'"
          :marker-id="restaurantMark.id"
          :coordinates="[restaurantMark?.coordinate[0], restaurantMark?.coordinate[1]]"
          :options="markOptions"
        >
          <template #component>
            <div class="yandex-balloon__content">
              <div class="yandex-balloon__container">
                <div class="yandex-balloon__img">
                  <!-- <img :src="properties.image" /> -->
                </div>
                <div class="yandex-balloon__body">
                  <div class="yandex-balloon__title">
                    {{ restaurantMark.title }}
                  </div>
                  <div class="yandex-balloon__other">
                    {{ restaurantMark.description }}
                  </div>
                </div>
              </div>
            </div>
          </template>
        </YandexMarker>
      </YandexMap>
    </div>
  </div>
</template>

<style lang="postcss">
.yandex-container {
  min-width: 300px !important;
  min-height: 100vh !important;
  height: 100vh !important;
  border-radius: 20px;
  overflow: hidden;
  @media (max-width: 768px) {
    max-width: 100%;
  }
}

.ui-map {
  [class$="map"],
  [class$="map-bg"] {
    @apply rounded-[20px];
  }
  [class*="copyrights-pane"] {
    @apply !hidden;
  }
  [class*="ground-pane"] {
    filter: hue-rotate(-30deg);
  }
  [class*="hint__layout"] {
    border-radius: 12px;
  }
  [class*="-map"] {
    border-radius: 10px !important;
    /* overflow: hidden; */
  }
  [class*="-balloon"] {
    @apply max-w-[300px];
  }
  [class*="balloon__content"] {
    height: 200px;
  }
}
</style>
