<template>
  <div>
    <h1>DAFTAR PIUTANG UNIT</h1>
    <ag-grid-vue
      :rowData="rowData"
      :columnDefs="colDefs"
      style="height: 500px"
      class="ag-theme-quartz"
      :pagination="pagination"
      :paginationPageSize="paginationPageSize"
      :paginationPageSizeSelector="paginationPageSizeSelector"
      @first-data-rendered="onFirstDataRendered"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { ref } from "vue";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridVue } from "ag-grid-vue3";

export default {
  name: "App",
  components: {
    AgGridVue,
  },
  setup() {
    const rowData = ref([
      {
        no: 1,
        noKewajiban: "KW-001",
        noPolisi: "B 1234 ABC",
        pemiliki: "John Doe",
        peserta: "Jane Doe",
        nomorVA: "1234567890",
        hargaTerbentuk: 50000000,
        biayaAdmin: 500000,
        ppn: 50000,
        total: 50500000,
        tanggalLelang: "2024-09-01",
        tanggalJatuhTempo: "2024-09-15",
        tanggalLunas: "2024-09-10",
        status: "Lunas",
      },
      {
        no: 2,
        noKewajiban: "KW-002",
        noPolisi: "B 5678 DEF",
        pemiliki: "Alice Smith",
        peserta: "Bob Smith",
        nomorVA: "0987654321",
        hargaTerbentuk: 30000000,
        biayaAdmin: 300000,
        ppn: 30000,
        total: 30300000,
        tanggalLelang: "2024-09-02",
        tanggalJatuhTempo: "2024-09-16",
        tanggalLunas: "2024-09-12",
        status: "Belum Lunas",
      },
      {
        no: 3,
        noKewajiban: "KW-003",
        noPolisi: "B 9012 GHI",
        pemiliki: "Michael Johnson",
        peserta: "Chris Johnson",
        nomorVA: "1122334455",
        hargaTerbentuk: 75000000,
        biayaAdmin: 750000,
        ppn: 75000,
        total: 75750000,
        tanggalLelang: "2024-09-03",
        tanggalJatuhTempo: "2024-09-17",
        tanggalLunas: "",
        status: "Dalam Proses",
      },
    ]);

    const colDefs = ref([
      { field: "no", headerName: "No", headerClass: "text-center" },
      {
        field: "noKewajiban",
        headerName: "No. Kewajiban",
        filter: true,
        floatingFilter: true,
        headerClass: "text-center",
      },
      {
        field: "noPolisi",
        headerName: "No. Polisi",
        filter: true,
        floatingFilter: true,
        headerClass: "text-center",
      },
      {
        field: "pemiliki",
        headerName: "Pemiliki",
        filter: true,
        floatingFilter: true,
        headerClass: "text-center",
      },
      {
        field: "peserta",
        headerName: "Peserta",
        filter: true,
        floatingFilter: true,
        headerClass: "text-center",
      },
      {
        field: "nomorVA",
        headerName: "Nomor VA",
        filter: true,
        floatingFilter: true,
        headerClass: "text-center",
      },
      {
        field: "hargaTerbentuk",
        headerName: "Harga Terbentuk (Rp)",
        filter: true,
        floatingFilter: true,
        headerClass: "text-center",
      },
      {
        field: "biayaAdmin",
        headerName: "Biaya Admin ex PPN (Rp)",
        filter: true,
        floatingFilter: true,
        headerClass: "text-center",
      },
      {
        field: "ppn",
        headerName: "PPN (Rp)",
        filter: true,
        floatingFilter: true,
        headerClass: "text-center",
      },
      {
        field: "total",
        headerName: "Total (Rp)",
        filter: true,
        floatingFilter: true,
        headerClass: "text-center",
      },
      {
        field: "tanggalLelang",
        headerName: "Tanggal Lelang",
        filter: true,
        floatingFilter: true,
        headerClass: "text-center",
      },
      {
        field: "tanggalJatuhTempo",
        headerName: "Tanggal Jatuh Tempo",
        filter: true,
        floatingFilter: true,
        headerClass: "text-center",
      },
      {
        field: "tanggalLunas",
        headerName: "Tanggal Lunas",
        filter: true,
        floatingFilter: true,
        headerClass: "text-center",
      },
      {
        field: "status",
        headerName: "Status",
        filter: true,
        floatingFilter: true,
        headerClass: "text-center",
      },
    ]);

    const pagination = ref(true);
    const paginationPageSize = ref(10);
    const paginationPageSizeSelector = ref([10, 20, 50, 100]);

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
