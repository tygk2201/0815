<template>
  <div class="header">
      <div class="left-logo">sssss</div>
    <el-menu
      :default-active="onRoutes"
      class="el-menu-demo right-menu"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <el-submenu index="1">
        <template slot="title">{{showTitle}}</template>
        <el-menu-item index="/home/homeFirst/first">第一主页</el-menu-item>
        <el-menu-item index="/home/homeSecond/first">第二主页</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      showTitle: "第一主页"
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path;
    }
  },
  created(){
    if(this.$route.path=='/home/homeFirst/first'){
       this.showTitle = "第一主页";
      } else {
        this.showTitle = "第二主页";
      }

  },
  methods: {
    handleSelect(key) {
      if (key == "/home/homeFirst/first") {
        this.showTitle = "第一主页";
      } else {
        this.showTitle = "第二主页";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.header{
    position: relative;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content:flex-end;
    align-items: center;
    .left-logo{
        width: 100px;
        height: 70px;
        position: absolute;
        left: 0;
    }
    .right-menu{
        // position: relative;
        // right: 0;
    }
}
</style>