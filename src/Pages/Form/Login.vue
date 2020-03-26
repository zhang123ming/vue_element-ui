<template>
  <div class="login-box">
    <el-row type="flex" justify="center">
      <el-col :md="8" :sm="12" :xs="24">
        <el-card shadow="hover">
          <el-row class="icon">
            <el-col :span="24">
              <i class="el-icon-platform-eleme"></i>
            </el-col>
          </el-row>
          <el-row style="margin-top:30px;">
            <el-col :span="24">
              <el-form :label-position="labelPosition" label-width="80px" :model="formData">
                <el-form-item label="userName">
                  <el-input v-model="formData.name" clearable></el-input>
                </el-form-item>
                <el-form-item label="passWord">
                  <el-input v-model="formData.pass" clearable></el-input>
                </el-form-item>
                <el-form-item label="type">
                  <el-select v-model="formData.type" placeholder>
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="btn">
              <el-button type="primary" @click="login">
                <span>Login</span>
              </el-button>
              <el-button>Cancel</el-button>
            </el-col>
          </el-row>
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
      labelPosition: "right",
      options: [
        {
          value: "1",
          label: "普通用户"
        },
        {
          value: "2",
          label: "管理员"
        },
        {
          value: "3",
          label: "超级管理员"
        }
      ],
      formData: {
        name: "",
        pass: "",
        type: "1"
      }
    };
  },
  created() {},
  computed: {},
  watch: {},
  methods: {
    login() {
      window.localStorage.setItem("userInfo", JSON.stringify(this.formData));
      this.$store.commit("SET_USERINFO", this.formData);
      this.$router.push({ path: "/demo" });
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.login-box {
  padding-top: 100px;
  .icon {
    .el-col {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .el-icon-platform-eleme {
    width: 50px;
    height: 50px;
    font-size: 60px;
    color: #409cff;
  }
  .btn {
    display: flex;
    justify-content: space-between;
  }
}
</style>