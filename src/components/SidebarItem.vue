<template>
  <div>
    <template v-for="item in routes" v-if="!item.hidden">
      <el-submenu :index="item.name" v-if="!item.noDropdown">
        <template slot="title">
          <i class="icon iconfont" :class="item.icon"></i><span slot="title">{{item.name}}</span>
        </template>
        <template v-for="child in item.children" v-if='!child.hidden'>
          <sidebar-item class='menu-indent' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
          <router-link v-else :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">
              {{child.name}}
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
      <router-link v-else-if="item.children.length>0" :to="item.path+'/'+item.children[0].path">
        <el-menu-item :index="item.path+'/'+item.children[0].path">
          <i class="icon iconfont" :class="item.icon"></i><span slot="title">{{item.children[0].name}}</span>
        </el-menu-item>
      </router-link>
      <router-link v-else :to="item.path">
        <el-menu-item :index="item.path">
          <i class="icon iconfont" :class="item.icon"></i><span slot="title">{{item.name}}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array
      }
    }
  }
</script>

<style lang='less' rel='stylesheet/less' scoped>
  .el-menu--collapse>.menu-wrapper>a>.el-menu-item span, .el-menu--collapse>.menu-wrapper>.el-submenu>.el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }

  .el-menu--collapse>.menu-wrapper>a>.el-menu-item .el-submenu__icon-arrow, .el-menu--collapse>.menu-wrapper>.el-submenu>.el-submenu__title .el-submenu__icon-arrow {
    display: none;
  }
</style>
