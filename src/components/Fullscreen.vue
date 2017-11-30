<template>
  <i class="icon iconfont icon-full screenfull" @click='click'></i>
</template>

<script>
  import screenfull from 'screenfull'
  export default {
    name: 'hamburger',
    data() {
      return {
        isFullscreen: false
      }
    },
    methods: {
      click() {
        if (!screenfull.enabled) {
          this.$message({
            message: 'you browser can not work',
            type: 'warning'
          })
          return false
        }
        screenfull.toggle()
      }
    }
  }
</script>

<style scoped>
  .screenfull {
    display: inline-block;
    cursor: pointer;
    vertical-align: -0.15em;
  }
</style>
