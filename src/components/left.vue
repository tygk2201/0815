<template>
<el-col :span="3">
    <el-menu
      default-active="onRoutes"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
       @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
        router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/homeFirst/first">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/homeFirst/second">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</el-col>
</template>
<script>
export default {
    data(){
        return{};
    },
    computed:{
       onRoutes() {
      return this.$route.path;
    }
    },
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key){
        this.fontBiggerFlag = key;
      }
    }
}
</script>