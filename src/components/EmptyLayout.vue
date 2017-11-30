<template>
  <div class="wrapper">
    <div class="content">
      <div class="container">
        <transition name="move" mode="out-in"><router-view></router-view></transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      if (this.$route.query.lang) {
        this.$i18n.locale = this.$route.query.lang;
      }
    }
  }
</script>

<style lang='less' rel='stylesheet/less' scoped>
  .wrapper {
    overflow-y: auto;
  }

  .content {
    width: 100%;
    height: 100%;
    min-width: 920px;
    position: relative;
    text-align: center;

    @media screen and (max-width: 767px) {
      min-width: inherit;
    }

    .container {
      position: relative;
      width: 920px;
      margin: 0 auto;

      @media screen and (max-width: 767px) {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
