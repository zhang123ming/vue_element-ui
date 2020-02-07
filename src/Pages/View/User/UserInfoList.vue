<template>
  <div>
    <el-row>
      <el-col :md="24">
        <el-table :data="userInfo" style="width: 100%">
          <el-table-column label="序号" width="100">
            <template slot-scope="scope">
              <span>{{ (scope.$index+1) }}</span>
            </template>
          </el-table-column>
          <el-table-column label="日销量" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.bugTody }}</span>
            </template>
          </el-table-column>
          <el-table-column label="月销量" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.bugMonth }}</span>
            </template>
          </el-table-column>
          <el-table-column label="总计" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.buyCount }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["userInfo"],
  components: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  watch: {},
  methods: {
    handleEdit(index, item) {
      console.log("edit", index, item);
    },
    handleDelete(index, item) {
      this.userInfo.splice(index, 1);
      console.log("delete", index, item);
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
</style>