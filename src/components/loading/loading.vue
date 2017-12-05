<template lang="html">
  <div
    class="loading"
    :class="{'loading-mask': mask, 'loading-partial': partial}"
    v-if="isShow">
    <div class="loading-bd">
        <div class="loading-img"></div>
        <p class="loading-cnt" v-if="title">{{title}}</p>
    </div>
</div>
</template>

<script>
export default {
  props: {
    mask: {
      type: Boolean,
      default: true
    },
    partial: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isShow: true
    };
  },

  methods: {
    hide() {
      this.isShow = false;
    }
  }
};
</script>

<style lang="css" scoped>
.loading{
  position: fixed;
  z-index: 10001;
  top: 50%;

  width: 100%;
}

.loading.loading-mask{
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.loading.loading-partial{
  position: absolute;

  top: 200px;
}

.loading .loading-bd{
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  box-sizing: border-box;

  padding: 10px 30px;

  text-align: center;
  border-radius: 4px;
  background-color: #616363;
}

.loading .loading-img{
  display: inline-block;

  width: 60px;
  height: 60px;

  background: url('./img/loading.gif') no-repeat center center;
  background-size: contain;
}

.loading .loading-cnt{
  margin-top: 5px;
  color: #f0f0f0;
  font-size: 14px;
}

</style>
