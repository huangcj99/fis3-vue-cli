<template>
  <div class="asd">
    {{ test }}
    <Test></Test>
  </div>
</template>

<script>
  import Test from './test.vue'
  import axios from 'axios'

  export default {
    data() {
      return {
        test: '11111'
      }
    },
    mounted() {
      console.log(axios);
    },
    components: {
      Test
    }
  }
</script>

<style lang="css" scoped>
div {
  color: red;
}
</style>
