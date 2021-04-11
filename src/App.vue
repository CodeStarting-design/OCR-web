<template>
  <div id="app" >
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navigation/>
    <Top/>
    <Middle/>
    <Upload/>
    <div class="ender">
   <h2>外包服务大赛：opensource团队开发</h2>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TextRes from './components/text.vue'
import Upload from './components/upload.vue'
import PictureSource from './components/picture.vue'
import Navigation from './components/Navigation.vue'
import Introduction from './components/Introduction.vue'
import FormRec from './components/FormRec.vue'
import Top from './components/top.vue'
import Middle from './components/middle.vue'

export default {
  name: 'App',
  components: {
    Upload,
    TextRes,
    PictureSource,
    Navigation,
    Introduction,
    FormRec,
    Top,
    Middle
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background:url('./img/background.jpg');
  background-repeat: no-repeat;
  background-size:100% 100%;
  background-attachment:fixed; */


}
.empty{
  height: 1200px;
}
.ender{
  margin-top:100px ;
  text-align: center;
   height: 40px;
}
</style>
