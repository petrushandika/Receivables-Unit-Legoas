<template>
  <Dialog>
    <DialogTrigger as="button">
      <Button class="bg-gray-500 text-white rounded px-3 py-1 hover:bg-gray-600"
        >Export</Button
      >
    </DialogTrigger>
    <DialogContent class="sm:max-w-screen-sm bg-white">
      <DialogHeader>
        <DialogTitle>Export</DialogTitle>
        <DialogDescription
          >Choose the file format you want to export.</DialogDescription
        >
      </DialogHeader>
      <div class="grid grid-cols-3 gap-4 py-4">
        <Button
          class="bg-blue-500 text-white rounded px-3 py-2 hover:bg-blue-600"
          >CSV</Button
        >
        <Button class="bg-red-500 text-white rounded px-3 py-2 hover:bg-red-600"
          >PDF</Button
        >
        <Button
          class="bg-green-500 text-white rounded px-3 py-2 hover:bg-green-600"
          >Excel</Button
        >
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
};
</script>
