<template>
  <div class="container">
    <h1>404</h1>
    <h3>你所访问的页面不存在.</h3>
    <hr/>
    <p>资源不存在或者没有访问权限， <a href="/">点击这里</a> 回到首页.</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style lang='less' rel='stylesheet/less' scoped>
  .container {
    color: #666;
    margin: 50px auto 40px auto;
    width: 800px;
    text-align: center;

    h1 {
      font-size: 56px;
      line-height: 100px;
      font-weight: normal;
      color: #456;
    }
    h2 {
      font-size: 24px;
      color: #666;
      line-height: 1.5em;
    }
    h3 {
      color: #456;
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
      margin: 15px 0;
    }

    hr {
      margin: 18px 0;
      border: 0;
      border-top: 1px solid #EEE;
      border-bottom: 1px solid white;
    }

    a {
      color: #17bc9b;
      text-decoration: none;
    }
  }
</style>
