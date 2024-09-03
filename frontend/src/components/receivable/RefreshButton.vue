<template>
  <font-awesome-icon
    :icon="['fas', 'sync']"
    :class="{ 'fa-spin': isRefreshing, 'cursor-pointer': true }"
    @click="$emit('refresh')"
    class="size-6 text-gray-400"
  />
</template>

<script>
export default {
  props: {
    isRefreshing: Boolean,
  },
};
</script>
