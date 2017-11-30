<template>
  <div class="navbar">
    <div class="tools" @click.prevent="toggleSidebar">
      <i class="icon iconfont icon-category"></i>
    </div>
    <tabs-view></tabs-view>
    <div class="user-info">
      <el-dropdown trigger="hover">
        <span class="el-dropdown-link user-info-inner"><img :src="user.avatar" @error="defaultAvatar"/> {{user.name}}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <fullscreen class='full-screen'></fullscreen>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import TabsView from './TabsView'
  import Fullscreen from './Fullscreen'
  export default {
    components: {
      TabsView,
      Fullscreen
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters({ loading: 'loading', user: 'user' })
    },
    methods: {
      defaultAvatar(e) {
        e.target.src = require('../../static/image/avatar.jpg');
      },
      toggleSidebar() {
        this.$store.dispatch('toggleSidebarState');
      },
      // 退出登录
      logout() {
        this.$confirm('确认退出吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('logout');
          this.$router.push('/login');
        });
      }
    }
  }
</script>

<style lang='less' rel='stylesheet/less' scoped>
  .navbar {
    height: 60px;
    line-height: 60px;
    width: 100%;
    color: #fff;
    background: #20a0ff;
    display: inline-flex;

    .tools {
      padding: 0px 20px;
      cursor: pointer;
    }

    .full-screen {
      position: absolute;
      right: 20px;
      top: 0px;
    }

    .user-info {
      text-align: right;
      position: absolute;
      right: 45px;

      .user-info-inner {
        cursor: pointer;
        color: #fff;

        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
    }
  }
</style>
