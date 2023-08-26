<script setup lang="ts">
import { YandexMap, YandexMarker } from "vue-yandex-maps"

import { mapSettings } from "@/shared/api/map"
import { ref } from "vue"

const allMarks = ref<any>([
  {
    slug: "kreml",
    id: 1213123123,
    coordinate: [46.349427, 48.031019],
    address: "остров Центральный",
    title: "Астраханский кремль",
    description: "",
    images: ["src/app/static/images/places/98y9v8a90y80a8ya.jpg"],
    options: {
      iconLayout: "default#image",
      iconImageHref: "src/app/static/icons/attraction-mark.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44]
    }
  },
  {
    slug: "kreml",
    id: 1213123123,
    coordinate: [46.43427, 48.031019],
    address: "остров Центральный",
    title: "Астраханский кремль",
    description: "",
    images: ["src/app/static/images/places/98y9v8a90y80a8ya.jpg"],
    options: {
      iconLayout: "default#image",
      iconImageHref: "src/app/static/icons/attraction-mark.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44]
    }
  },
  {
    slug: "kreml",
    id: 1213123123,
    coordinate: [46.31427, 48.033019],
    address: "остров Центральный",
    title: "Астраханский кремль",
    description: "",
    images: ["src/app/static/images/places/98y9v8a90y80a8ya.jpg"],
    options: {
      iconLayout: "default#image",
      iconImageHref: "src/app/static/icons/attraction-mark.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44]
    }
  },
  {
    slug: "rozmarin",
    id: 12131423233,
    coordinate: [46.351676, 48.035353],
    address: "Эспланадная",
    title: "Розмарин",
    description: "Кафе",
    images: ["https://make-eat.ru/restiraniy/kafe-rozmarin-astrahan.jpg"],
    options: {
      iconLayout: "default#image",
      iconImageHref: "src/app/static/icons/restaurant-mark.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44]
    }
  },
  {
    slug: "karakoy",
    id: 121314232331,
    coordinate: [46.352646, 48.032218],
    address: "Ульяновыз 1/12/2",
    title: "Karakoy",
    description: "Кафе",
    images: [
      "https://avatars.mds.yandex.net/get-altay/4737312/2a00000179f1c670d3ab2cac658131ea6463/XXL"
    ],
    options: {
      iconLayout: "default#image",
      iconImageHref: "src/app/static/icons/restaurant-mark.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44]
    }
  },
  {
    slug: "karakoy",
    id: 121314232331,
    coordinate: [46.308646, 48.023218],
    address: "Ульяновыз 1/12/2",
    title: "Karakoy",
    description: "Кафе",
    images: [
      "https://avatars.mds.yandex.net/get-altay/4737312/2a00000179f1c670d3ab2cac658131ea6463/XXL"
    ],
    options: {
      iconLayout: "default#image",
      iconImageHref: "src/app/static/icons/restaurant-mark.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44]
    }
  },
  {
    slug: "karakoy",
    id: 121314232331,
    coordinate: [46.358646, 48.09218],
    address: "Ульяновыз 1/12/2",
    title: "Karakoy",
    description: "Кафе",
    images: [
      "https://avatars.mds.yandex.net/get-altay/4737312/2a00000179f1c670d3ab2cac658131ea6463/XXL"
    ],
    options: {
      iconLayout: "default#image",
      iconImageHref: "src/app/static/icons/restaurant-mark.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44]
    }
  },
  {
    slug: "karakoy",
    id: 121314232331,
    coordinate: [46.378646, 48.06218],
    address: "Ульяновыз 1/12/2",
    title: "Karakoy",
    description: "Кафе",
    images: [
      "https://avatars.mds.yandex.net/get-altay/4737312/2a00000179f1c670d3ab2cac658131ea6463/XXL"
    ],
    options: {
      iconLayout: "default#image",
      iconImageHref: "src/app/static/icons/restaurant-mark.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44]
    }
  },
  {
    slug: "karakoy",
    id: 121314232331,
    coordinate: [46.328646, 48.06218],
    address: "Ульяновыз 1/12/2",
    title: "Karakoy",
    description: "Кафе",
    images: [
      "https://avatars.mds.yandex.net/get-altay/4737312/2a00000179f1c670d3ab2cac658131ea6463/XXL"
    ],
    options: {
      iconLayout: "default#image",
      iconImageHref: "src/app/static/icons/restaurant-mark.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44]
    }
  },
  {
    slug: "cosmos",
    id: 1213331,
    coordinate: [46.361568, 48.057096],
    address: "ул. Анри Барбюса, 29В, лит.А",
    title: "Cosmos",
    description: "Отель",
    images: [
      "https://avatars.mds.yandex.net/get-tycoon/6797441/2a00000189f88b4c0c8b274bea8ddc8dd8aa/priority-headline-background"
    ],
    options: {
      iconLayout: "default#image",
      iconImageHref: "src/app/static/icons/hotel-mark.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44]
    }
  },
  {
    slug: "surf_coffee_legacy",
    id: 1212121314294841,
    coordinate: [46.334908, 48.008441],
    address: "ул. Приволжского затона",
    title: "Surf Coffee Legacy",
    description: "Кофейня",
    images: [
      "https://avatars.mds.yandex.net/get-altay/5491685/2a0000018106d26caf58e7e989bff688897a/XXXL"
    ],
    options: {
      iconLayout: "default#image",
      iconImageHref: "src/app/static/icons/restaurant-mark.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44]
    }
  }
])

const allAreas = ref<any>([
  {
    id: 12121313,
    AREA: [
      [
        [46.348696, 48.020441],
        [46.343126, 48.03045],
        [46.346855, 48.038319],
        [46.348038, 48.04689],
        [46.351635, 48.045442],
        [46.355341, 48.03243]
      ]
    ],
    options: {
      interactivityModel: "default#transparent",
      opacity: 0.5,
      fillColor: "#0f8a42",
      fillOpacity: 0.5,
      strokeColor: "#0f8a4291",
      strokeOpacity: 1,
      strokeWidth: 2,
      borderRadius: 6
    }
  },
  {
    id: 93121213,
    AREA: [
      [
        [46.338487, 48.022975],
        [46.341629, 48.043321],
        [46.346855, 48.038319],
        // [46.334954, 48.022443],
        [46.343126, 48.03045],
        [46.348696, 48.020441]
      ]
    ],
    options: {
      interactivityModel: "default#transparent",
      opacity: 0.5,
      fillColor: "#9de453",
      fillOpacity: 0.5,
      strokeColor: "#9f8a4291",
      strokeOpacity: 1,
      strokeWidth: 1,
      borderRadius: 6
    }
  },
  {
    id: 83121213,
    AREA: [
      [
        [46.356688, 48.034834],
        [46.368227, 48.040681],
        [46.381962, 48.050793],
        [46.382057, 48.06508],
        [46.378175, 48.064997],
        [46.374309, 48.059802],
        [46.367461, 48.056256],
        [46.361889, 48.057121],
        [46.351675, 48.057739],
        [46.350731, 48.054604],
        [46.353835, 48.042725],
        [46.355584, 48.037224]
      ]
    ],
    options: {
      interactivityModel: "default#transparent",
      opacity: 0.5,
      fillColor: "#6DDF72",
      fillOpacity: 0.5,
      strokeColor: "#6DDF7213",
      strokeOpacity: 1,
      strokeWidth: 1,
      borderRadius: 6
    }
  },
  {
    id: 312121213,
    AREA: [
      [
        [46.417309, 48.076916],
        [46.415105, 48.101918],
        [46.401846, 48.107083],
        [46.399334, 48.095525],
        [46.399104, 48.083233],
        [46.381529, 48.065559],
      ]
    ],
    options: {
      interactivityModel: "default#transparent",
      opacity: 0.5,
      fillColor: "#E53835",
      fillOpacity: 0.5,
      strokeColor: "#E53835A3",
      strokeOpacity: 1,
      strokeWidth: 1,
      borderRadius: 6
    }
  },
])
</script>

<template>
  <div class="ui-map">
    <div class="ui-map__container">
      <YandexMap
        :settings="mapSettings"
        :coordinates="[46.32, 48.023233]"
        :zoom="11"
        :controls="[]"
        ymap-class="geo-map"
        map-was-initialized
      >
        <YandexMarker
          v-for="mark in allMarks"
          :key="mark.slug"
          :type="'Point'"
          :marker-id="mark.id"
          :coordinates="[mark?.coordinate[0], mark?.coordinate[1]]"
          :options="mark.options"
        >
          <template #component>
            <div class="yandex-balloon__content">
              <div class="yandex-balloon__container">
                <div class="yandex-balloon__img">
                  <img :src="mark.images[0]" />
                </div>
                <div class="yandex-balloon__body">
                  <div class="yandex-balloon__title">
                    {{ mark.title }}
                  </div>
                  <div class="yandex-balloon__other">
                    {{ mark.description }}
                  </div>
                  <a class="yandex-balloon__link"> Подробнее </a>
                </div>
              </div>
            </div>
          </template>
        </YandexMarker>
        <YandexMarker
          v-for="mark in allAreas"
          :key="mark.id"
          :type="'Polygon'"
          :marker-id="mark.id"
          :coordinates="mark.AREA"
          :options="mark.options"
        />
      </YandexMap>
    </div>
  </div>
</template>

<style lang="postcss">
.yandex-container {
  min-width: 300px !important;
  min-height: calc(100vh - 60px) !important;
  height: calc(100vh - 60px) !important;
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
    @apply text-center;
    & > ymaps {
      @apply !h-max !w-[160px];
    }
  }
}

.yandex-balloon {
  &__img {
    @apply mb-[10px];
    img {
      @apply max-h-[100px] object-cover min-w-full;
    }
  }
  &__title {
    @apply font-bold text-[14px];
  }
  &__other {
    @apply text-[12px] text-secondary-color;
  }
}
</style>
