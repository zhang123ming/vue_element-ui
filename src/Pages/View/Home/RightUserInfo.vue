<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card shadow="hover">
          <div class="user">
            <img src="http://img0.imgtn.bdimg.com/it/u=1473143190,1186706094&fm=11&gp=0.jpg" alt />
            <div class="user-info">
              <h5>{{userInfo.name}}</h5>
              <p v-if="userInfo.type==1">普通用户</p>
              <p v-else-if="userInfo.type==2">管理员</p>
              <p v-else>超级管理员</p>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="info">
            <div class="des">
              <p>上次登录时间 :</p>
              <p>上次登录地点 :</p>
            </div>
            <div class="hour">
              <p>2019-09-12</p>
              <p>北京</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userInfo: this.$store.state.auth.userInfo
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
  .el-card {
    .user {
      display: flex;
      align-items: center;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid #ddd;
      }
      .user-info {
        margin-left: 20px;
      }
    }
    .info {
      display: flex;
      .hour {
        margin-left: 10px;
      }
    }
  }
}
</style>