<template>
<el-upload
  class="upload-demo"
  ref="upload"
  action="https://www.fastmock.site/mock/a9907b54b348c1d0f5459f6c0638bc74/_picurl/api/error"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  :auto-upload="false"
  :before-upload="before_Upload"
  multiple 
  style=" margin-top:50px; ">
  <el-button slot="trigger" size="small" type="primary" round id="select">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" round @click="submitUpload()" id="upload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip" id="tip">请上传jpg/png文件</div>
</el-upload>  
</template>
<script>
  export default {
    name:'upload',
    data() {
      return {
        fileList: [ ]
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
      before_Upload(file){
        let FormDatas = new FormData()
        FormDatas.append('file',file)
          let that = this
          that.$axios({
            method:'post',
            url:"http://whutosa.coreja.com/ocr/img/whole/",
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
                  url:"http://whutosa.coreja.com/ocr/img/whole/?",
                  params:{  filename:file.name }
                }).then(res => {
                  if (res.data.code === "00000" ) {
                    that.$message.success("识别成功");
                     console.log(count,res.data)
                     count=0
                     clearInterval(timer)
                     let textContent=res.data.data.text.split(/[\t\n]/)
                     function textObjcet(str){
                       this.data=str
                     }
                     let textArrObj=[]
                     for(let item of textContent){
                       textArrObj.push(new textObjcet(item));
                     }
                     let RecResult={
                       picUrl:"http://"+res.data.data.imageUrl,
                       textArray:textArrObj
                     }
                     that.$store.commit({
                       type:'pushFormResult',
                       listItem:RecResult
                     })
                    }
                    if(count==60){  
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

    }
  }
</script>
<style >
  #select{
      font-size: 20px;
      width: 163px;
      height: 41px;
  }
  #upload{
    font-size: 20px;
    width: 163px;
    height: 41px;
    text-align: center;
    display: inline-block;
  }

  #tip{
    font-size: 18px;
  }
  
</style>