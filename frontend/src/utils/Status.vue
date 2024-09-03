<template>
  <span :class="statusClass">{{ params.value }}</span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  params: Object,
});

const statusClass = computed(() => {
  switch (props.params.value) {
    case "Lunas":
      return "bg-green-100 text-green-800";
    case "Konfirmasi Pembayaran":
      return "bg-blue-100 text-blue-800";
    case "Proses Pembayaran":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
});
</script>

<style scoped></style>
