<template>
  <div>
    <el-row class="from-tabel">
      <el-col :md="19">
        <UserNew></UserNew>
      </el-col>
      <el-col :md="5">
        <UserSearch></UserSearch>
      </el-col>
    </el-row>
    <UserInfoList :userInfo="userInfo"></UserInfoList>
  </div>
</template>

<script>
import UserNew from "./UserNew";
import UserSearch from "./UserSearch";
import UserInfoList from "./UserInfoList";
export default {
  components: {
    UserNew,
    UserSearch,
    UserInfoList
  },
  data() {
    return {
      userInfo: []
    };
  },
  created() {
    this.getUserInfoList();
  },
  computed: {},
  watch: {},
  methods: {
    getUserInfoList() {
      this.$http.get("/home/getData").then(res => {
        this.userInfo = res.data.getHomeData.data.videoData;
      });
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
</style>