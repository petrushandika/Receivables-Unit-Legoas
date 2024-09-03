<template>
  <ag-grid-vue
    :rowData="rowData"
    :columnDefs="colDefs"
    style="height: 500px; width: 100%"
    class="ag-theme-alpine"
    :pagination="pagination"
    :paginationPageSize="paginationPageSize"
    :paginationPageSizeSelector="paginationPageSizeSelector"
    :defaultColDef="defaultColDef"
    :frameworkComponents="frameworkComponents"
    :rowSelection="'multiple'"
    @firstDataRendered="onFirstDataRendered"
  />
</template>

<script setup>
import { ref } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const props = defineProps({
  rowData: Array,
  colDefs: Array,
  pagination: Boolean,
  paginationPageSize: Number,
  paginationPageSizeSelector: Array,
  defaultColDef: Object,
  frameworkComponents: Object,
});

const agGridRef = ref(null);

function onFirstDataRendered(params) {
  agGridRef.value.api.paginationSetPageSize(props.paginationPageSize);
}
</script>
