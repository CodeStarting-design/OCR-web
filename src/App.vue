<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="empty">
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
export default {
  name: 'App',
  components: {
    Upload,
    TextRes,
    PictureSource
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.empty{
  height: 600px;
}
</style>
