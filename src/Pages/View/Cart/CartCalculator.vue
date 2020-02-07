<template>
  <div>
    <el-row class="calculator">
      <el-col :span="4">
        <el-checkbox v-model="selectChecked">
          全选
          <span>({{all_select_count}})</span>
        </el-checkbox>
      </el-col>
      <el-col :span="20">
        <span>总计 ：</span>
        <span>{{all_money}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selectChecked: false,
      all_money: 0,
      all_select_count: 0
    };
  },
  created() {},
  computed: {
    computedGoodsObj() {
      return this.$store.getters.getGoodsObj;
    }
  },
  watch: {
    computedGoodsObj(val) {
      this.all_money = val.all_money;
      this.all_select_count = val.all_select_count;
      this.selectChecked = val.all_select_checkbox;
    },
    selectChecked(val) {
      this.$store.commit("SET_ALLCHECKED", val);
    }
  },
  methods: {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.calculator {
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: #fafafa;
  position: fixed;
  bottom: 0;
  z-index: 100;
}
</style>