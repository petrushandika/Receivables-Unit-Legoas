<template>
  <ag-grid-vue
    :rowData="rowData"
    :columnDefs="colDefs"
    style="height: 500px"
    class="ag-theme-alpine"
    :pagination="pagination"
    :paginationPageSize="paginationPageSize"
    :defaultColDef="defaultColDef"
    :frameworkComponents="frameworkComponents"
  />
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default {
  components: {
    AgGridVue,
  },
  props: {
    rowData: Array,
    colDefs: Array,
    pagination: Boolean,
    paginationPageSize: Number,
    defaultColDef: Object,
    frameworkComponents: Object,
  },
};
</script>
