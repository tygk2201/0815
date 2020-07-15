<template>
  <div class="home_main">
    <v-head></v-head> 
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>
<script>
import vHead from "../components/header.vue";
import vFooter from "../components/footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    vHead,
    vFooter
  }
};
</script>
<style lang="less" scoped>
.home_main {
  width: 100%;
  height: 98vh;
  position: relative;
}
</style>