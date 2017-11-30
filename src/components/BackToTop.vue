<template>
  <transition :name="transitionName">
    <div class="back-to-top" @click="backToTop" v-show="visible">
      <i class="icon iconfont icon-top"></i>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'BackToTop',
    props: {
      visibilityHeight: {
        type: Number,
        default: 400
      },
      backPosition: {
        type: Number,
        default: 0
      },
      transitionName: {
        type: String,
        default: 'fade'
      }
    },
    data() {
      return {
        visible: false,
        interval: null
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
      if (this.interval) {
        clearInterval(this.interval)
      }
    },
    methods: {
      handleScroll() {
        this.visible = window.pageYOffset > this.visibilityHeight
      },
      backToTop() {
        const start = window.pageYOffset
        let i = 0
        this.interval = setInterval(() => {
          const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500))
          if (next <= this.backPosition) {
            window.scrollTo(0, this.backPosition)
            clearInterval(this.interval)
          } else {
            window.scrollTo(0, next)
          }
          i++
        }, 16.7)
      },
      easeInOutQuad(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b
        return -c / 2 * (--t * (t - 2) - 1) + b
      }
    }
  }
</script>

<style scoped>
  .back-to-top {
    width: 40px;
    height: 40px;
    position: fixed;
    right: 50px;
    bottom: 50px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
    line-height: 45px;
    background: #e7eaf1;
  }
  .back-to-top:hover {
    background: #d5dbe7;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }
  .back-to-top .Icon {
    fill: #9aaabf;
    background: none;
  }
</style>
