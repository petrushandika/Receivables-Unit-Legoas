<template>
  <div class="flex flex-col gap-y-2">
    <Header :crumbs="crumbs" />

    <h1 class="text-xl font-semibold py-2">PIUTANG UNIT</h1>

    <div class="flex flex-row justify-between py-3 gap-x-3 items-center">
      <SearchInput />
      <RefreshButton
        @refresh="handleRefresh"
        :isRefreshing="isRefreshing"
      />
      <ExportDialog />
      <AddNewDialog />
    </div>

    <Table
      :rowData="rowData"
      :colDefs="colDefs"
      :pagination="pagination"
      :paginationPageSize="paginationPageSize"
      :defaultColDef="defaultColDef"
      :frameworkComponents="frameworkComponents"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import data from "../data/data.json";
import { colDefs } from "../configs/colDefs";

import SearchInput from "../components/receivable/SearchInput.vue";
import RefreshButton from "../components/receivable/RefreshButton.vue";
import ExportDialog from "../components/receivable/ExportDialog.vue";
import AddNewDialog from "../components/receivable/AddNewDialog.vue";
import Table from "../components/receivable/Table.vue";
import Header from "../components/receivable/Header.vue";

const crumbs = [{ label: "DAFTAR PIUTANG UNIT", url: "/receivable" }];

const rowData = ref(data);
const pagination = ref(true);
const paginationPageSize = ref(10);
const defaultColDef = ref({ sortable: true, filter: true });
const frameworkComponents = ref({});
const isRefreshing = ref(false);

function handleRefresh() {
  isRefreshing.value = true;
  setTimeout(() => {
    isRefreshing.value = false;
    console.log("Data refreshed!");
  }, 1000);
}
</script>

<style scoped></style>
