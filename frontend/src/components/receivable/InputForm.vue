<template>
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
      <div class="flex flex-row justify-between gap-x-3">
        <div class="flex flex-col gap-y-2 w-full">
          <Label for="tanggalLelang">Tanggal Lelang</Label>
          <Input
            id="tanggalLelang"
            class="w-full rounded"
            type="date"
          />
        </div>
        <div class="flex flex-col gap-y-2 w-full">
          <Label for="tanggalJatuhTempo">Tanggal Jatuh Tempo</Label>
          <Input
            id="tanggalJatuhTempo"
            class="w-full rounded"
            type="date"
          />
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <Label for="tanggalLunas">Tanggal Lunas</Label>
        <Input
          id="tanggalLunas"
          class="w-full rounded"
          type="date"
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
</template>

<script>
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default {
  components: {
    Input,
    Label,
  },
};
</script>

<style scoped></style>
