<template>
  <form
    class="grid grid-cols-2 gap-4 py-4"
    @submit.prevent="handleSave"
  >
    <div class="space-y-4">
      <div class="flex flex-col gap-y-2">
        <Label for="noKewajiban">No. Kewajiban</Label>
        <Input
          id="noKewajiban"
          class="w-full rounded"
          v-model="formData.noKewajiban"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <Label for="noPolisi">No. Polisi</Label>
        <Input
          id="noPolisi"
          class="w-full rounded"
          v-model="formData.noPolisi"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <Label for="pemiliki">Pemiliki</Label>
        <Input
          id="pemiliki"
          class="w-full rounded"
          v-model="formData.pemiliki"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <Label for="peserta">Peserta</Label>
        <Input
          id="peserta"
          class="w-full rounded"
          v-model="formData.peserta"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <Label for="nomorVA">Nomor VA</Label>
        <Input
          id="nomorVA"
          class="w-full rounded"
          v-model="formData.nomorVA"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <Label for="hargaTerbentuk">Harga Terbentuk (Rp)</Label>
        <Input
          id="hargaTerbentuk"
          class="w-full rounded"
          v-model="formData.hargaTerbentuk"
        />
      </div>
    </div>

    <div class="space-y-4">
      <div class="flex flex-col gap-y-2">
        <Label for="biayaAdmin">Biaya Admin ex PPN (Rp)</Label>
        <Input
          id="biayaAdmin"
          class="w-full rounded"
          v-model="formData.biayaAdmin"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <Label for="ppn">PPN (Rp)</Label>
        <Input
          id="ppn"
          class="w-full rounded"
          v-model="formData.ppn"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <Label for="total">Total (Rp)</Label>
        <Input
          id="total"
          class="w-full rounded"
          v-model="formData.total"
        />
      </div>
      <div class="flex flex-row justify-between gap-x-3">
        <div class="flex flex-col gap-y-2 w-full">
          <Label for="tanggalLelang">Tanggal Lelang</Label>
          <Input
            id="tanggalLelang"
            class="w-full rounded"
            type="date"
            v-model="formData.tanggalLelang"
          />
        </div>
        <div class="flex flex-col gap-y-2 w-full">
          <Label for="tanggalJatuhTempo">Tanggal Jatuh Tempo</Label>
          <Input
            id="tanggalJatuhTempo"
            class="w-full rounded"
            type="date"
            v-model="formData.tanggalJatuhTempo"
          />
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <Label for="tanggalLunas">Tanggal Lunas</Label>
        <Input
          id="tanggalLunas"
          class="w-full rounded"
          type="date"
          v-model="formData.tanggalLunas"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <Label for="status">Status</Label>
        <Input
          id="status"
          class="w-full rounded"
          v-model="formData.status"
        />
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default {
  components: {
    Input,
    Label,
  },
  setup() {
    const formData = ref({
      noKewajiban: "",
      noPolisi: "",
      pemiliki: "",
      peserta: "",
      nomorVA: "",
      hargaTerbentuk: "",
      biayaAdmin: "",
      ppn: "",
      total: "",
      tanggalLelang: "",
      tanggalJatuhTempo: "",
      tanggalLunas: "",
      status: "",
    });

    const rowData = ref([]);

    const handleSave = () => {
      rowData.value.push({ ...formData.value });
      formData.value = {
        noKewajiban: "",
        noPolisi: "",
        pemiliki: "",
        peserta: "",
        nomorVA: "",
        hargaTerbentuk: "",
        biayaAdmin: "",
        ppn: "",
        total: "",
        tanggalLelang: "",
        tanggalJatuhTempo: "",
        tanggalLunas: "",
        status: "",
      };
      console.log("Data saved:", rowData.value);
    };

    return {
      formData,
      rowData,
      handleSave,
    };
  },
};
</script>

<style scoped></style>
