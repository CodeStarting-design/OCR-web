<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 200px">
    <el-table-column
      prop="date"
      label="识别文本"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name:'textRes',
    data() {
      return {
        tableData: [{
          date: '文本一',
        }, {
          date: '文本二',
        }, {
          date: '文本三',
        }, {
          date: '文本四',
        }]
      }
    }
  }
</script>