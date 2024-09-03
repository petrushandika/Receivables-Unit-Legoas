<template>
  <div class="relative w-full">
    <font-awesome-icon
      icon="search"
      class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
    />
    <Input
      class="border-2 border-black rounded-full px-10 py-1 outline-none pl-10"
      placeholder="Search"
    />
  </div>
</template>

<script>
import { Input } from "../ui/input";

export default {
  components: {
    Input,
  },
};
</script>
