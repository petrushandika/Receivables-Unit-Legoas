<template>
  <Dialog v-model="isOpen">
    <DialogTrigger as="button">
      <Button class="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600">
        Add New
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-screen-lg bg-white">
      <DialogHeader>
        <DialogTitle>Add New</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <InputForm @saveData="addDataToTable" />
      <DialogFooter>
        <Button
          type="submit"
          @click="saveAndClose"
          class="bg-green-400 text-white rounded"
        >
          Save
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script>
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import InputForm from "../receivable/InputForm.vue";
import { ref } from "vue";

export default {
  components: {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    Button,
    InputForm,
  },
  setup() {
    const isOpen = ref(false);
    const tableData = ref([]);

    const addDataToTable = (data) => {
      tableData.value.push(data);
      console.log("Current table data:", tableData.value);
    };

    const saveAndClose = () => {
      console.log("Data saved and dialog closed.");
      isOpen.value = false;
    };

    return {
      isOpen,
      tableData,
      addDataToTable,
      saveAndClose,
    };
  },
};
</script>
