<template>
  <div>
    <el-row :gutter="20">
      <el-col :md="12" :sm="24" :xs="24" style="margin-bottom:20px;">
        <el-card shadow="hover">
          <LeftFooterBar></LeftFooterBar>
        </el-card>
      </el-col>
      <el-col :md="12" :sm="24" :xs="24">
        <el-card shadow="hover">
          <LeftFooterPie></LeftFooterPie>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftFooterBar from "./LeftFooterBar";
import LeftFooterPie from "./LeftFooterPie";
export default {
  components: {
    LeftFooterBar,
    LeftFooterPie
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.el-row {
  margin-top: 20px;
  .el-card {
    height: 280px;
  }
}
</style>