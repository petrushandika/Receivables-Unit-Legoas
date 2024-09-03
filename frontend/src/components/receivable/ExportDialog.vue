<template>
  <Dialog>
    <DialogTrigger as="button">
      <Button
        class="bg-gray-500 text-white rounded px-3 py-1 hover:bg-gray-600"
      >
        Export
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-screen-sm bg-white">
      <DialogHeader>
        <DialogTitle>Export</DialogTitle>
        <DialogDescription>
          Choose the file format you want to export.
        </DialogDescription>
      </DialogHeader>
      <div class="grid grid-cols-3 gap-4 py-4">
        <Button
          class="bg-blue-500 text-white rounded px-3 py-2 hover:bg-blue-600"
        >
          CSV
        </Button>
        <Button
          class="bg-red-500 text-white rounded px-3 py-2 hover:bg-red-600"
        >
          PDF
        </Button>
        <Button
          class="bg-green-500 text-white rounded px-3 py-2 hover:bg-green-600"
          @click="exportToExcel"
        >
          Excel
        </Button>
      </div>
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
} from "../ui/dialog";
import { Button } from "../ui/button";
import * as XLSX from "xlsx";

export default {
  components: {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Button,
  },
  props: {
    rowData: Array,
  },
  methods: {
    exportToExcel() {
      const ws = XLSX.utils.json_to_sheet(this.rowData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      XLSX.writeFile(wb, "data.xlsx");
    },
  },
};
</script>

<style scoped></style>
