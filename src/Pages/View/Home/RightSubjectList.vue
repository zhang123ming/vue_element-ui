<template>
  <div>
    <el-row v-loading="loading">
      <el-col :span="24">
        <el-card shadow="hover">
          <el-table :data="subjectList" height="500px" style="width: 100%">
            <el-table-column prop="name" label="课程" width="100"></el-table-column>
            <el-table-column prop="bugTody" label="今日购买" width="100"></el-table-column>
            <el-table-column prop="bugMonth" label="本月购买" width="100"></el-table-column>
            <el-table-column prop="buyCount" label="总计" width="100"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["subjectList"],
  components: {},
  data() {
    return {
      loading: true
    };
  },
  created() {
    const self = this;
    if (self.subjectList) {
      setTimeout(function() {
        self.loading = false;
      }, 2000);
    }
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.el-row {
  margin-top: 20px;
  margin-bottom: 20px;
  .el-card {
    height: 521px;
  }
}
</style>