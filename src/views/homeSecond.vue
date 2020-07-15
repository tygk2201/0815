<template>
    <div class="contanter">
      <v-top></v-top>
      <router-view></router-view>
    </div>
</template>
<script>
import vTop from "@/components/top.vue";
// import vmiddele from "@components/footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    vTop
  }
};
</script>
<style lang="less" scoped>
  .contanter {
    position: relative;
    min-height: 600px;
    margin-top: 30px;

  }
</style>