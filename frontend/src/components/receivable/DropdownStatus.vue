<template>
  <div class="relative">
    <select
      v-model="selectedStatus"
      @change="onChange"
      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <option value="Lunas">Lunas</option>
      <option value="Konfirmasi Pembayaran">Konfirmasi Pembayaran</option>
      <option value="Proses Pembayaran">Proses Pembayaran</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  value: String,
});

const emit = defineEmits(["update:value"]);

const selectedStatus = ref(props.value);

watch(selectedStatus, (newValue) => {
  emit("update:value", newValue);
});

const onChange = (event) => {
  emit("update:value", event.target.value);
};
</script>

<style scoped></style>
