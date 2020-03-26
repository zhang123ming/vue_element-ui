<template>
  <div>
    <el-row class="calculator">
      <el-col :span="4">
        <span @click="selectAll">
          <img
            src="./../../../../static/checkeds.jpg"
            width="25px;"
            height="25px;"
            v-if="allSelsect"
            alt
          />
          <img src="./../../../../static/check.jpg" width="25px;" height="25px;" v-else alt />
        </span>
        <span>全选</span>
        <span>({{getCount}})</span>
      </el-col>
      <el-col :span="20">
        <span>总计 ：</span>
        <span>{{getAllMoney}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters(["getAllMoney", "allSelsect", "getCount"])
  },
  watch: {},
  methods: {
    selectAll() {
      this.$store.commit("SELECTALL");
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.calculator {
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: #fafafa;
  position: fixed;
  bottom: 0;
  z-index: 100;
}
</style>