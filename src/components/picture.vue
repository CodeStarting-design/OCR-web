<template>

  <div class="block" id="pic">
    <!-- <span class="demonstration">{{ fit }}</span> -->
     <el-button icon="el-icon-arrow-left" circle id="leftBtn" type="success" @click="lastPic" ></el-button>
    <el-image
      style="width: 850px; height: 550px" 
      :src ="imageUrl"
      :fit="fits" 
      class="imgShow">
      </el-image>
      <el-button icon="el-icon-arrow-right" circle id="rightBtn" type="success" @click="nextPic"></el-button>
  </div>

</template>
<script>
import TextRes from './text.vue'
export default {
  name:'pictureSource',
  data() { 
      return { 
        fits: 'scale-down', 
        leftShow:false,
        rightShow:true
      }
    },
    methods: {
      nextPic(){
      this.$store.commit('nextRecItem')
      this.$store.state.RecIndex<this.$store.state.PicTextList.length-1?this.rightShow=true:this.rightShow=false;
      },
      lastPic(){
        this.$store.commit('lastRecItem')
        this.$store.state.RecIndex<0?this.leftShow=false:this.leftShow=true;
      }
    },
    components:{
      TextRes
    },
    computed:{
       imageUrl(){
        //  return "https://whutosa.coreja.com/ocr/outputImage/196778030-067-001.jpg"
         return  this.$store.state.PicTextList[this.$store.state.RecIndex].picUrl
       },
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
  background-color: #FFFFF0;
  
}
.imgShow{
   border:1px dashed #BEBEBE;
   border-top:none;
   border-bottom:none;
}
</style>


