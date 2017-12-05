<template>
  <div >
    <span class="abc">000000</span>
    <Test2></Test2>
  </div>
</template>

<script>
  import Test2 from './test2.vue'

  export default {
    components: {
      Test2
    }
  }
</script>

<style lang="css" scoped>
  .abc {
    color: blue;
    font-size: 30px;
    box-sizing: border-box;
    display: flex;
  }
</style>
