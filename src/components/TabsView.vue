<template>
  <div class='tabs-view-container'>
    <router-link class="tabs-view" v-for="tag in Array.from(openedViews)" :to="tag.path" :key="tag.path">
      <el-tag :closable="true" :type="isActive(tag.path)?'gray':''" @close='closeViewTab(tag,$event)'>
        {{tag.name}}
      </el-tag>
    </router-link>
  </div>
</template>

<script>
  export default {
    computed: {
      openedViews() {
        return this.$store.getters.openedViews.slice(-6)
      }
    },
    methods: {
      closeViewTab(view, $event) {
        this.$store.dispatch('removeView', view)
        $event.preventDefault()
      },
      generateRoute() {
        if (this.$route.matched[this.$route.matched.length - 1].name) {
          return this.$route.matched[this.$route.matched.length - 1]
        }
        this.$route.matched[0].path = '/index'
        return this.$route.matched[0]
      },
      addViewTab() {
        this.$store.dispatch('addView', this.generateRoute())
      },
      isActive(path) {
        return path === this.$route.path
      }
    },
    watch: {
      $route() {
        this.addViewTab()
      }
    }
  }
</script>

<style lang='less' rel='stylesheet/less' scoped>
  .tabs-view-container {
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
    .tabs-view {
      margin-left: 10px;
    }
  }
</style>
