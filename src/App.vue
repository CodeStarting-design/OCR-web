<template>
  <div id="app"
    v-loading="loading"
    element-loading-text="文本识别中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="empty">
    <Navigation/>
    <PictureSource/>
    <TextRes/>
    </div>
    <Upload/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TextRes from './components/text.vue'
import Upload from './components/upload.vue'
import PictureSource from './components/picture.vue'
import Navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Upload,
    TextRes,
    PictureSource,
    Navigation
  },
  data() {
    return {
      loading:false
    }
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

}
.empty{
  height: 600px;
}
</style>
