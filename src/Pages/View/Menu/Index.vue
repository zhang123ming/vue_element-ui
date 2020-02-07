<template>
  <el-container style="height:100vh">
    <el-aside style="width:auto">
      <CommonAside></CommonAside>
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader></CommonHeader>
      </el-header>
      <CommonTabs></CommonTabs>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "./CommonAside";
import CommonHeader from "./CommonHeader";
import CommonTabs from "./CommonTabs";
export default {
  components: {
    CommonAside,
    CommonHeader,
    CommonTabs
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
.el-header {
  box-shadow: 0px 1px 3px #dfdfdf;
}
</style>