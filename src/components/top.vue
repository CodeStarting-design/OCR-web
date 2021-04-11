<template>
  <div id="top">
    <Introduction/>
    <FormRec/>
  </div>
</template>
<script>
import Introduction from './Introduction.vue'
import FormRec from './FormRec'
export default {
  name: 'Top',
  components: {
    Introduction,
    FormRec
  }
}
</script>
<style scoped>
#top{
  margin-top: 20px;
  height: 450px;
}
</style>