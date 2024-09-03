<template>
  <div class="relative">
    <button
      @click="toggleMenu"
      class="text-gray-600 hover:text-gray-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 12h.01M12 12h.01M18 12h.01"
        />
      </svg>
    </button>
    <div
      v-if="showMenu"
      class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
    >
      <button
        @click="edit"
        class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Edit
      </button>
      <button
        @click="deleteItem"
        class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Object,
    params: Object,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    edit() {
      this.params.onEdit(this.value);
      this.showMenu = false;
    },
    deleteItem() {
      this.params.onDelete(this.value);
      this.showMenu = false;
    },
  },
};
</script>

<style scoped></style>
