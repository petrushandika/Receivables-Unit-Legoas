import ActionMenu from "../components/receivable/ActionMenu.vue";
import DropdownStatus from "../components/receivable/DropdownStatus.vue";
import Status from "../utils/Status.vue";

export const colDefs = [
  {
    field: "",
    headerName: "",
    filter: false,
    headerCheckboxSelection: true,
    checkboxSelection: true,
    pinned: "left",
    width: 50,
  },
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
    editable: true,
    cellEditorFramework: DropdownStatus,
    Status,
    cellRendererFramework: DropdownStatus,
  },
  {
    field: "actions",
    headerName: "Action",
    filter: false,
    width: 100,
    cellRendererFramework: ActionMenu,
    cellRendererParams: {
      cellRendererParams: {
        onEdit: (params: any) => handleEdit(params),
        onDelete: (params: any) => handleDelete(params),
      },
    },
  },
];

function handleEdit(params: any) {
  console.log("Edit", params.value);
}

function handleDelete(params: any) {
  console.log("Delete", params.value);
}
