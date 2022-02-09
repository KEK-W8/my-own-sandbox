<template>
  <div class="main-box">
    <el-table
      :data="tableData"
      class="table"
    >
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ElTable, ElTableColumn } from 'element-plus';

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'TEST',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
</script>

<style lang="less" scoped>
.main-box{
  width: 100%;
  height: 100%;
  display: flex;
  padding: 60px;
  .table {
    width: 700px;
    border-radius:4px;
  }
}
</style>
