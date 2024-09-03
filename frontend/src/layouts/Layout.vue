<template>
  <div>
    <div class="bg-transparent">
      <div
        class="flex items-center py-4 px-8 w-full h-16 border border-gray-100 bg-white fixed"
      >
        <h1 class="text-3xl font-extrabold text-blue-400">
          Receivables
          <span class="text-black text-sm font-light ml-1">Unit</span>
        </h1>
      </div>
      <div class="wrapper flex flex-row w-full h-full fixed z-10">
        <div class="w-1/5 h-full mt-14">
          <Navigation />
        </div>
      </div>

      <div class="flex flex-row w-full h-full">
        <div class="w-1/5 h-full mt-14" />
        <div class="w-4/5 mt-14 z-20">
          <div class="w-full h-full bg-transparent p-8">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../utils/Navigation.vue";

export default {
  name: "Layout",
  components: {
    Navigation,
  },
};
</script>

<style scoped></style>
