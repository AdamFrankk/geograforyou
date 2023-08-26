<script setup lang="ts">
import { ErrorLayout } from "@/widgets/layouts"
</script>

<template>
  <ErrorLayout>
    <template v-slot:code>404</template>
    <template v-slot:title>Эта страница не найдена</template>
    <template v-slot:subtitle>Такой страницы не существует</template>
  </ErrorLayout>
</template>
