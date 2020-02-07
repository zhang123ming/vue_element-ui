<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :md="8" :sm="24">
        <RightUserInfo></RightUserInfo>
        <RightSubjectList :subjectList="subjectList"></RightSubjectList>
      </el-col>

      <el-col :md="16" :sm="24">
        <LeftHeader :orderList="orderList"></LeftHeader>
        <LeftSection></LeftSection>
        <LeftFooter></LeftFooter>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RightUserInfo from "./RightUserInfo";
import RightSubjectList from "./RightSubjectList";
import LeftHeader from "./LeftHeader";
import LeftSection from "./LeftSection";
import LeftFooter from "./LeftFooter";

export default {
  components: {
    RightUserInfo,
    RightSubjectList,
    LeftHeader,
    LeftSection,
    LeftFooter
  },
  data() {
    return {
      subjectList: [],
      orderList: []
    };
  },
  created() {},
  computed: {},
  watch: {},
  methods: {
    getData() {
      this.$http.get("/home/getData").then(res => {
        this.orderList = res.data.getTabData.getTabData;
        this.subjectList = res.data.getHomeData.data.videoData;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang='scss' scoped>
</style>