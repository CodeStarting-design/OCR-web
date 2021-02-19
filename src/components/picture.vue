<template>

  <div class="block" id="pic">
    <!-- <span class="demonstration">{{ fit }}</span> -->
     <el-button icon="el-icon-arrow-left" circle id="leftBtn" v-show="index" @click="lastPic"></el-button>
    <el-image
      style="width: 850px; height: 550px"
      :src="urlList[index]"
      :fit="fits">
      </el-image>
      <el-button icon="el-icon-arrow-right" circle id="rightBtn" v-show="(index-(urlList.length-1))" @click="nextPic"></el-button>
  </div>

</template>
<script>
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
  width: 1100px;
}
</style>


