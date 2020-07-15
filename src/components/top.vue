<template>
    <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu> -->
<div class="top-select">
    <div class="item-menu" v-for="(item,index) in routes" :key="index"  @click="onSelect(item.url)">
        <div class="text" >{{item.title}}</div>
        <span class="line"></span>
    </div>

</div>
</template>
<script>
export default {
    data(){
        return{
            routes:[{url:'/home/homeSecond/first',
            title:'会议管理'},{url:'/home/homeSecond/second',
            title:'会议系统'}]

        }
    },
    methods:{
        onSelect(url){
            this.$router.push(url);
        }
    }
}
</script>
<style lang="less" scoped>
.top-select{
    display: flex;
    .item-menu{
        width: 100px;
        font-size: 18px;
        height: 40px;
    }
}

</style>