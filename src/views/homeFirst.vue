<template>
    <div class="contanter">
      <v-left></v-left>
      <div class="right">
<router-view ></router-view>
      </div>
      
    </div>
</template>
<script>
import vLeft from "../components/left.vue";
// import vmiddele from "@components/footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    vLeft
  }
};
</script>
<style lang="less" scoped>
  .contanter {
    display: flex;
    position: relative;
    margin-top: 30px;
    min-height: 600px;
    .right{
      width: 1000px;
      margin-left: 50px;
    

    }

  }
</style>