<template>
  <div>
    <el-row :gutter="20" id="left-header">
      <el-col :md="8" :sm="12" :xs="24" v-for="order in orderList" :key="order.name">
        <el-card shadow="hover">
          <div class="card-box">
            <i :class="'el-icon-'+order.icon" :style="'background:'+order.color"></i>
            <div class="order-detail">
              <h3>{{order.number}}</h3>
              <p>{{order.name}}</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["orderList"],
  components: {},
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
.el-col {
  margin-bottom: 15px;

  .card-box {
    display: flex;
    .order-detail {
      margin-left: 10px;
      padding-top: 10px;
      p {
        font-size: 12px;
      }
    }
    i {
      width: 70px;
      height: 70px;
      color: #fff;
      line-height: 70px;
      font-size: 30px;
      text-align: center;
    }
  }
}
</style>