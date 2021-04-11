<template>
  <div id="middle">
   <PictureSource/>
   <TextRes/>
  </div>
</template>
<script>
import TextRes from './text.vue'
import PictureSource from './picture.vue'
export default {
  name: 'Middle',
  components: {
    TextRes,
    PictureSource
  }
}
</script>
<style scoped>
#middle{
  margin-top: 10px;
  height: 550px;
}
</style>