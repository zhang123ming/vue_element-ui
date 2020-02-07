 <template>
  <div class="header-box">
    <div class="breadcrumb-box">
      <el-button type="primary" size="mini" @click="handelBtn">
        <i class="el-icon-menu"></i>
      </el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/demo/home' }" @click.native="setItemTab">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentTab">{{currentTab.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link active-color cursor">
          <el-avatar class="logo" size="medium" :src="avatarImg[0]" v-if="userInfo.type=='1'"></el-avatar>
          <el-avatar class="logo" size="medium" :src="avatarImg[1]" v-if="userInfo.type=='2'"></el-avatar>
          <el-avatar class="logo" size="medium" :src="avatarImg[2]" v-if="userInfo.type=='3'"></el-avatar>

          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting">设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-close">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userInfo: this.$store.getters.getUserInfo,
      currentTab: this.$store.getters.getCurrentTab,
      avatarImg: [
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2395615566,55385469&fm=26&gp=0.jpg",
        "data:image/jpeg;base64,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",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3503840982,2282893671&fm=26&gp=0.jpg"
      ]
    };
  },
  created() {},
  computed: {
    watchTabMenu() {
      return this.$store.getters.getCurrentTab;
    }
  },
  watch: {
    watchTabMenu(val) {
      this.currentTab = val;
    }
  },
  methods: {
    handelBtn() {
      this.$store.commit("COLLAPSE_MENU");
    },
    setItemTab() {
      this.$store.commit("SET_TAB", { label: "首页", path: "/", name: "Home" });
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.header-box {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  .el-dropdown-selfdefine {
    display: flex;
    align-items: center;
  }

  .breadcrumb-box {
    display: flex;
    align-items: center;
    .el-breadcrumb {
      margin-left: 10px;
    }
  }
  // bottom
  .el-icon-arrow-down.el-icon--right {
    color: #d3cfcf;
  }
}
</style>