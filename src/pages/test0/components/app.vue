<template>
  <div class="asd">
    {{ test }}
    <Test></Test>
    <ul>
      <li v-for="item in list">{{ item.city }}</li>
    </ul>
  </div>
</template>

<script>
  import Test from './test.vue'
  import Axios from '../../../libs/axios.js'

  export default {
    data() {
      return {
        test: '11111111',
        list: []
      }
    },
    mounted() {
      this.request();
    },
    methods: {
      request() {
        Axios({
              method: 'GET',
              url: 'http://dev.api.cer.dingdingyisheng.mobi/api/base/clinical-project',
              params: {
                projectExperimenterType: 'VOLUNTEER',
               page: 1,
               size: 10
              }
            }).then((response) => {
              this.list = response.content
            });
      }
    },
    components: {
      Test
    }
  }
</script>

<style lang="css" scoped>
div {
  color: blue;
  box-sizing: border-box;
  display: flex;
}
</style>
