<template>
  <Dialog>
    <DialogTrigger as="button">
      <Button class="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600"
        >Add New</Button
      >
    </DialogTrigger>
    <DialogContent class="sm:max-w-screen-lg bg-white">
      <DialogHeader>
        <DialogTitle>Add New</DialogTitle>
        <DialogDescription
          >Make changes to your profile here. Click save when you're
          done.</DialogDescription
        >
      </DialogHeader>
      <InputForm />
      <DialogFooter>
        <Button
          type="submit"
          class="bg-green-400 text-white rounded"
          >Save</Button
        >
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
};
</script>
