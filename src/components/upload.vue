<template>
<el-upload
  class="upload-demo"
  ref="upload"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  :auto-upload="false"
  multiple >
  <el-button slot="trigger" size="small" type="primary" round id="select">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" round @click="submitUpload();open()" id="upload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip" id="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>  
</template>
<script>
  export default {
    name:'upload',
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
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
      open() {
        this.$alert('上传成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
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