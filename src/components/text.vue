<template>
<div class="textContainer">
  <span class="title">识别结果</span>
  <div class="tableDiv">
  <table class="textTable">
   <thead>
        <tr>
            <th>文字内容</th>
        </tr>
    </thead>
    <tbody>
    <tr v-for="(item,index) in this.$store.state.PicTextList[this.$store.state.RecIndex].textArray" :key="index">
         <td>{{item.data}}</td>
    </tr>
    </tbody>
  </table>
  <!-- <el-table
    :data="TextList"
    stripe
    style="width: 100%; height:98%;">
    <el-table-column
      prop="data"
      label="文本内容"
      width="300px">
    </el-table-column>
  </el-table> -->
  </div>
</div>
</template>

<script>
  export default {
    name:'textRes',
    data() {
      return {
        
      }
    },
    computed:{
       TextList(){
         console.log(this.$store.state.PicTextList[this.$store.state.RecIndex])
         return this.$store.state.PicTextList[this.$store.state.RecIndex].textArray
       }
    }
  }
</script>
<style>
.textContainer{
  display: inline-block;
  width: 300px;
  vertical-align: top;
  background: 
  linear-gradient(to left, #218ef5, #218ef5) left top no-repeat,
	linear-gradient(to bottom, #218ef5, #218ef5) left top no-repeat,
	linear-gradient(to left, #218ef5, #218ef5) right top no-repeat,
	linear-gradient(to bottom, #218ef5, #218ef5) right top no-repeat,
	linear-gradient(to left, #218ef5, #218ef5) left bottom no-repeat,
	linear-gradient(to bottom, #218ef5, #218ef5) left bottom no-repeat,
	linear-gradient(to left, #218ef5, #218ef5) right bottom no-repeat,
	linear-gradient(to left, #218ef5, #218ef5) right bottom no-repeat;
	background-size: 3px 20px, 20px 3px, 3px 20px, 20px 3px;
  border:1px solid #BEBEBE;
  height: 100%;
  /* overflow-x: auto; 
  overflow-y: auto; */
  margin-top: 7px;
  background-color: #FFFFF0;
}
.textTable{
    text-align: left;
    margin-top: 15px;
    width: 100%;
    border-collapse: collapse;  
    line-height: 25px;
}
th,td{
    border: 1px solid rgb(204, 202, 202);
    text-align: left;
    padding: 20px 0;
    font-size: 17px;
}
table thead tr{
    background-color: #2390f5;
    color: rgb(17, 11, 11);
    font-size: 25px;
    line-height: 35px;
}

table tbody tr:nth-child(odd){
    background-color: #eee;
}

table tbody tr:hover{
    background-color: #ccc;
}

table tbody tr td:first-child{
    color: rgb(8, 2, 0);
}
.tableDiv{
  overflow:auto;
  margin-top: 7px;
  height: 93%;
  width: 98%;
  margin-left: 1%;
  margin-right: 1%;
}
.title{
  display: block;
  font-size: 20px;
  margin-bottom: 5px;
  
}
</style>