<template>
  <div>
    <el-row>
      <el-col :md="24">
        <el-input size="small" v-model="search" placeholder="请输入内容"></el-input>
        <el-button size="small" type="primary">搜索</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      search: null
    };
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
  .el-col {
    display: flex;
    button {
      margin-left: 5px;
    }
  }
}
</style>