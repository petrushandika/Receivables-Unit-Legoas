<template>
  <div class="flex flex-col gap-y-2">
    <h1>DAFTAR PIUTANG UNIT</h1>
    <div class="flex flex-row justify-between py-3 gap-x-3">
      <Input
        class="border-2 border-black rounded-full px-3 py-1 outline-none"
      />
      <div class="flex flex-row gap-x-3">
        <Button class="bg-gray-400 text-white rounded px-3 py-1">Export</Button>
        <Dialog>
          <DialogTrigger as="button">
            <Button class="bg-red-400 text-white rounded px-3 py-1">
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
            <div class="grid grid-cols-2 gap-4 py-4">
              <div class="space-y-4">
                <div class="flex flex-col gap-y-2">
                  <Label for="noKewajiban">No. Kewajiban</Label>
                  <Input
                    id="noKewajiban"
                    class="w-full rounded"
                  />
                </div>
                <div class="flex flex-col gap-y-2">
                  <Label for="noPolisi">No. Polisi</Label>
                  <Input
                    id="noPolisi"
                    class="w-full rounded"
                  />
                </div>
                <div class="flex flex-col gap-y-2">
                  <Label for="pemiliki">Pemiliki</Label>
                  <Input
                    id="pemiliki"
                    class="w-full rounded"
                  />
                </div>
                <div class="flex flex-col gap-y-2">
                  <Label for="peserta">Peserta</Label>
                  <Input
                    id="peserta"
                    class="w-full rounded"
                  />
                </div>
                <div class="flex flex-col gap-y-2">
                  <Label for="nomorVA">Nomor VA</Label>
                  <Input
                    id="nomorVA"
                    class="w-full rounded"
                  />
                </div>
                <div class="flex flex-col gap-y-2">
                  <Label for="hargaTerbentuk">Harga Terbentuk (Rp)</Label>
                  <Input
                    id="hargaTerbentuk"
                    class="w-full rounded"
                  />
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex flex-col gap-y-2">
                  <Label for="biayaAdmin">Biaya Admin ex PPN (Rp)</Label>
                  <Input
                    id="biayaAdmin"
                    class="w-full rounded"
                  />
                </div>
                <div class="flex flex-col gap-y-2">
                  <Label for="ppn">PPN (Rp)</Label>
                  <Input
                    id="ppn"
                    class="w-full rounded"
                  />
                </div>
                <div class="flex flex-col gap-y-2">
                  <Label for="total">Total (Rp)</Label>
                  <Input
                    id="total"
                    class="w-full rounded"
                  />
                </div>
                <div class="flex flex-col gap-y-2">
                  <Label for="tanggalLelang">Tanggal Lelang</Label>
                  <Input
                    id="tanggalLelang"
                    class="w-full rounded"
                  />
                </div>
                <div class="flex flex-col gap-y-2">
                  <Label for="tanggalJatuhTempo">Tanggal Jatuh Tempo</Label>
                  <Input
                    id="tanggalJatuhTempo"
                    class="w-full rounded"
                  />
                </div>
                <div class="flex flex-col gap-y-2">
                  <Label for="tanggalLunas">Tanggal Lunas</Label>
                  <Input
                    id="tanggalLunas"
                    class="w-full rounded"
                  />
                </div>
                <div class="flex flex-col gap-y-2">
                  <Label for="status">Status</Label>
                  <Input
                    id="status"
                    class="w-full rounded"
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                class="bg-green-400 text-white rounded"
              >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
    <ag-grid-vue
      :rowData="rowData"
      :columnDefs="colDefs"
      style="height: 500px"
      class="ag-theme-quartz"
      :pagination="pagination"
      :paginationPageSize="paginationPageSize"
      :paginationPageSizeSelector="paginationPageSizeSelector"
      :rowSelection="rowSelection"
      @first-data-rendered="onFirstDataRendered"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { ref } from "vue";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridVue } from "ag-grid-vue3";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import data from "../../data/data.json";
import { colDefs } from "../../configs/colDefs";

export default {
  name: "App",
  components: {
    AgGridVue,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Input,
    Label,
    Button,
  },
  setup() {
    const rowData = ref(data);
    const pagination = ref(true);
    const paginationPageSize = ref(10);
    const paginationPageSizeSelector = ref([10, 50, 100, 500]);
    const rowSelection = ref("multiple");

    const onFirstDataRendered = (params) => {
      params.api.autoSizeAllColumns();
      const columnState = params.columnApi.getAllColumns().map((col) => ({
        colId: col.getColId(),
        width: Math.max(col.getActualWidth(), 100),
      }));
      params.columnApi.applyColumnState({
        state: columnState,
        applyOrder: true,
      });
    };

    return {
      rowData,
      colDefs,
      rowSelection,
      pagination,
      paginationPageSize,
      paginationPageSizeSelector,
      onFirstDataRendered,
    };
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
