<template>
  <div class="goods">
    <el-card shadow="hover">
      <el-row>
        <el-col :span="24">
          <div class="box">
            <img
              src="./../../../../static/checkeds.jpg"
              width="25px;"
              height="25px;"
              v-if="good.checked"
              alt
              @click="select(good.id)"
            />
            <img
              src="./../../../../static/check.jpg"
              @click="select(good.id)"
              width="25px;"
              v-else
              height="25px;"
              alt
            />

            <div>
              <img class="good-img" :src="good.img" alt />
            </div>
            <div class="good-content">
              <p class="good-title">{{good.title}}</p>
              <p>
                <strong class="good-price">$ {{good.price}}</strong>
              </p>
              <div style="margin-top:10px;">
                <el-input-number size="mini" v-model="good.count" :min="1" :max="10" label="描述文字"></el-input-number>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["good"],
  components: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  watch: {},
  methods: {
    select(id) {
      this.$store.commit("SELECT", id);
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