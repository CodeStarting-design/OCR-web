<template>

  <div class="block" id="pic">
    <!-- <span class="demonstration">{{ fit }}</span> -->
    <div>
     <el-button icon="el-icon-arrow-left" circle id="leftBtn" @click="lastPic"></el-button>
    <el-image
      style="width: 850px; height: 550px"
      :src="urlList[index]"
      :fit="fits">
      </el-image>
      <el-button icon="el-icon-arrow-right" circle id="rightBtn" @click="nextPic"></el-button>
    </div>
  </div>

</template>
<script>
import TextRes from './text.vue'
export default {
  name:'pictureSource',
  data() { 
      return { 
        fits: 'scale-down', 
        urlList:['https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg','https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg','https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'],
        index:0,
        leftShow:false,
        rightShow:true
      }
    },
    methods: {
      nextPic(){
      this.index<this.urlList.length-1?this.index++:this.rightShow=false;
      console.log(this.index)
      },
      lastPic(){
        this.index>0?this.index--:this.leftShow=false;
      }
    },
    components:{
      TextRes
    }
}
</script>
<style>
#leftBtn{
  vertical-align: middle;
  margin-bottom: 560px;
  
}
#rightBtn{
  vertical-align: middle;
  margin-bottom: 560px;
 
}
#pic{
  width: 1000px;
  display: inline-block;
  margin-right: 20px;
  margin-top: 7px;
  border: 2px solid #BEBEBE;
  border-radius: 5px;
  height: 555px;
  background-color: #fff;
  
}
</style>


