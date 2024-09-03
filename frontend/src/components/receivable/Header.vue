<template>
  <nav class="flex items-center space-x-2 text-sm">
    <router-link
      to="/"
      class="text-blue-600"
    >
      HOME
    </router-link>

    <span class="text-gray-500"> > </span>

    <router-link
      v-if="secondCrumb.url"
      :to="secondCrumb.url"
      class="text-black"
    >
      {{ secondCrumb.label }}
    </router-link>
    <span
      v-else
      class="text-gray-700"
    >
      {{ secondCrumb.label }}
    </span>

    <span class="text-gray-500"> > </span>

    <span class="text-gray-700">{{ currentLabel }}</span>
  </nav>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  crumbs: {
    type: Array,
    required: true,
  },
});

const secondCrumb = computed(() => props.crumbs[0] || { label: "", url: "" });

const currentLabel = computed(() =>
  props.crumbs[1] ? props.crumbs[1].label : ""
);
</script>

<style scoped></style>
