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
          @click="exportToCSV"
        >
          CSV
        </Button>
        <Button
          class="bg-red-500 text-white rounded px-3 py-2 hover:bg-red-600"
          @click="exportToPDF"
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
import Papa from "papaparse";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Import the autotable plugin

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
    rowData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    exportToCSV() {
      const csv = Papa.unparse(this.rowData);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "data.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },

    exportToPDF() {
      const doc = new jsPDF();
      const columns = ["Column1", "Column2", "Column3"];
      const rows = this.rowData.map((item) => [
        item.field1,
        item.field2,
        item.field3,
      ]);

      doc.autoTable({
        head: [columns],
        body: rows,
      });

      doc.save("data.pdf");
    },

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
