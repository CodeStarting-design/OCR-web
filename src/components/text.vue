<template>
<div class="textContainer">
  <el-table
    :data="tableData"
    stripe

    style="width: 95%; display: inline-block;">
    <el-table-column
      prop="date"
      label="识别文本"
      width="180">
    </el-table-column>
  </el-table>
</div>
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
<style>
.textContainer{
  display: inline-block;
  width: 300px;
  vertical-align: top;
  border:1px solid #BEBEBE;
  border-radius: 2px;
}
</style>