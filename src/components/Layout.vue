<template>
  <div class="app-wrapper" :class="{hideSidebar:hideSidebar}">
    <sidebar class="sidebar-container" :systemName="sysName"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <section class="content-container">
        <div class="breadcrumb-container">
          <strong class="title">{{$route.name}}</strong>
          <levelbar></levelbar>
        </div>
        <div class="content-wrapper">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
          <back-to-top></back-to-top>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Sidebar from './Sidebar'
  import Navbar from './Navbar'
  import Levelbar from './Levelbar'
  import BackToTop from './BackToTop'

  export default {
    components: {
      Sidebar,
      Navbar,
      Levelbar,
      BackToTop
    },
    data() {
      return {
        sysName: 'VUE UI'
      }
    },
    computed: {
      ...mapGetters({ loading: 'loading', hideSidebar: 'sidebar' })
    },
    methods: {
      // 折叠导航栏
      collapse() {
        this.collapsed = !this.collapsed;
      }
    }
  }
</script>

<style lang='less' rel='stylesheet/less' scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;

    &.hideSidebar {
      .sidebar-container {
        width: 64px;
      }

      .main-container {
        margin-left: 64px;
      }
    }

    .sidebar-container {
      width: 230px;
      height: 100%;
      position: fixed;
    }

    .main-container {
      min-height: 100%;
      margin-left: 230px;

      .content-container {
        overflow-y: auto;
        padding: 20px;

        .breadcrumb-container {

          .title {
            width: 200px;
            float: left;
            color: #475669;
          }

          .breadcrumb-inner {
            float: right;
          }
        }

        .content-wrapper {
          background-color: #fff;
          margin: 30px 30px 10px;
          position: relative;
        }
      }
    }
  }
</style>
