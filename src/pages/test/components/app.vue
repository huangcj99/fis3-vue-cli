<template>
  <div class="asd">
    {{ test }}
    <Test></Test>
  </div>
</template>

<script>
  import Test from './test.vue'

  export default {
    data() {
      return {
        test: '11111'
      }
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
