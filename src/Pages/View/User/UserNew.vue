<template>
  <div>
    <el-button type="primary" size="small" @click="dialogVisible = true">
      <i class="el-icon-plus"></i>
      <span>新增</span>
    </el-button>
    <el-row>
      <el-col :md="24">
        <el-dialog
          title="新增用户"
          :visible.sync="dialogVisible"
          width="45%"
          :before-close="handleClose"
        >
          <div>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="年龄">
                <el-input v-model="form.age"></el-input>
              </el-form-item>
              <el-form-item label="出生日期">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.birth"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-col>
              </el-form-item>

              <el-form-item label="性别">
                <el-radio-group v-model="form.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="角色">
                <el-select v-model="form.type" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="备注">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitFormData">确 定</el-button>
          </span>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialogVisible: false,
      options: [
        { value: "普通用户", label: "普通用户" },
        { value: "管理员", label: "管理员" },
        { value: "超级管理员", label: "超级管理员" }
      ],
      form: {
        name: "",
        age: "",
        birth: new Date(),
        sex: "男",
        type: "普通用户",
        desc: ""
      }
    };
  },
  created() {},
  computed: {},
  watch: {},
  methods: {
    submitFormData() {
      this.dialogVisible = false;
      console.log(this.form);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
</style>