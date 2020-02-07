<template>
  <div class="goods">
    <el-card shadow="hover">
      <el-row>
        <el-col :span="24">
          <div class="box">
            <el-checkbox v-model="good.checked"></el-checkbox>
            <div>
              <img class="good-img" :src="good.img" alt />
            </div>
            <div class="good-content">
              <p class="good-title">{{good.title}}</p>
              <p>
                <strong class="good-price">$ {{good.price}}</strong>
              </p>
              <div style="margin-top:10px;">
                <el-input-number
                  size="mini"
                  v-model="good.number"
                  @change="handleChange"
                  :min="1"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["good"],
  components: {},
  data() {
    return {};
  },
  created() {},
  computed: {
    checked() {
      return this.good.checked;
    }
  },
  watch: {
    checked(val) {
      this.$store.commit("SET_A_CHECKED", this.good);
    }
  },
  methods: {
    handleChange(value) {
      this.good.number = value;
      this.$store.commit("SET_GOODSNUMBER", this.good);
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.goods {
  margin-top: 20px;
  .box {
    display: flex;
    .good-img {
      width: 150px;
      height: 150px;
      margin-left: 5px;
    }
    .good-content {
      margin-left: 5px;
      .good-price {
        color: crimson;
      }
      .good-title {
        font-size: 12px;
      }
    }
  }
}
</style>