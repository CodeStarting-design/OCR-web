<template>
<div class="formRec">
<div class="textContaine">
  <!-- <el-table
    :data="singleTextList"
    stripe
    style="width: 100%; display: inline-block;">
    <el-table-column
      prop="Filename"
      label="源文件"
      width="270">
    </el-table-column>
   <el-table-column
      prop="TextContent"
      label="文本内容"
      width="270">
    </el-table-column>
    <el-table-column
      prop="Condifence"
      label="置信度"
      width="270">
    </el-table-column>
  </el-table> -->
  <table class="textTable">
   <thead>
        <tr>
            <th>源文件</th>
            <th>文本内容</th>
            <th>置信度</th>
        </tr>
    </thead>
    <tbody>
    <tr v-for="(item,index) in singleTextList" :key="index">
         <td>{{item.Filename}}</td>
         <td>{{item.TextContent}}</td>
         <td>{{item.Condifence}}</td>
    </tr>
    </tbody>
  </table>
</div>
<div id="form_up">
  <el-upload
  class="upload-demo"
  :show-file-list= false
  ref="upload"
  action="https://www.fastmock.site/mock/a9907b54b348c1d0f5459f6c0638bc74/_picurl/api/error"
  :file-list="fileList"
  :auto-upload="false"
  :before-upload="before_Upload"
  multiple 
  >
  <el-button slot="trigger" size="small" type="primary" round>选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload" round>上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">请上传已完成分割的jpg/png文件</div>
</el-upload>   
</div>
</div>
</template>

<script>
  export default {
    name:"FormRec",
    data() {
      return {
        fileList: [ ],
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 10 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      before_Upload(file){
        console.log(file);
        let FormDatas = new FormData()
        FormDatas.append('file',file)
        console.log(FormDatas)
          let that = this
          that.$axios({
            method:'post',
            url:"http://whutosa.coreja.com/ocr/img/single/",
            headers:{'Content-Type': 'multipart/form-data'},
            data:FormDatas
          }).then(function(res){
           if(res.data.code=='00000'){
             let count=0
              that.$message.success("上传成功");
               const timer = window.setInterval(() => {
                setTimeout(function () {
                that.$axios({
                  method: 'get',
                  url:"http://whutosa.coreja.com/ocr/img/single/?",
                  params:{  filename:file.name }
                }).then(res => {
                  if (res.data.code === "00000" ) {
                    that.$message.success("识别成功");
                     console.log(count,res.data)
                     count=0
                     clearInterval(timer)
                     let textContent=res.data.data.text.split(/[\t\n]/)
                     console.log(textContent)
                     function singleObjcet(fName,tContent,confidence){
                       this.Filename=fName
                       this.TextContent=tContent
                       this.Condifence=confidence
                     }
                     let singleRes=new singleObjcet(textContent[0],textContent[1],textContent[2])
                     console.log(singleRes)
                     that.$store.commit({
                       type:'pushSingleResult',
                       listItem:singleRes
                     })
                    }
                    if(count==40){  
                      console.log(count,res.data); 
                      count=0
                      that.$message.error("网络异常，请重新发送"); 
                      clearInterval(timer) 
                      }
                    count++
                  })
                }, 0)
              }, 1000)
             that.$once('hook:beforeDestroy', () => {
                   clearInterval(timer)
                  })
            }else{
              that.$message.error(res.data.message);
            }
          })
      },
    },
    computed:{
      singleTextList(){
        
        return this.$store.state.SingleText
      }
    }
  }
</script>
<style scoped>
#form_up{
  /* display: inline-block; */
  width: 100%;
  margin-top: 15px;
  height: 22%;
}
.textContaine{
  /* display: inline-block; */
  width: 100%;
  border:1px solid #BEBEBE;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 2px;
  height: 75%;
  overflow-x: auto; 
  overflow-y: auto;
  margin-top: 7px;
}
.textTable{
    text-align: left;
    margin-top: 15px;
    width: 94%;
    border-collapse: collapse;  
    line-height: 15px;
    margin-left: 3%;
    margin-right: 3%;
}
th,td{
    border: 1px solid rgb(204, 202, 202);
    text-align: left;
    padding: 15px 0;
    font-size: 17px;
}
table thead tr{
    background-color: #2390f5;
    color: rgb(17, 11, 11);
    font-size: 15px;
    line-height: 20px;
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

.formRec{
  float:right;
  margin-top: 20px;
  height: 90%; 
  width:700px;
  margin-right: 90px;
  background: 
  linear-gradient(to left, #02a6b5, #02a6b5) left top no-repeat,
	linear-gradient(to bottom, #02a6b5, #02a6b5) left top no-repeat,
	linear-gradient(to left, #02a6b5, #02a6b5) right top no-repeat,
	linear-gradient(to bottom, #02a6b5, #02a6b5) right top no-repeat,
	linear-gradient(to left, #02a6b5, #02a6b5) left bottom no-repeat,
	linear-gradient(to bottom, #02a6b5, #02a6b5) left bottom no-repeat,
	linear-gradient(to left, #02a6b5, #02a6b5) right bottom no-repeat,
	linear-gradient(to left, #02a6b5, #02a6b5) right bottom no-repeat;
	background-size: 3px 20px, 20px 3px, 3px 20px, 20px 3px;
  border:1px solid #BEBEBE;
  background-color: #FFFFF0;
}
</style>





