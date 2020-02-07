<template>
  <div>
    <el-row :gutter="10" v-if="goods">
      <el-col :span="8" v-for="good in goods" :key="good.id">
        <CartListItem :good="good"></CartListItem>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
export default {
  components: {
    CartListItem
  },
  data() {
    return {
      goods: []
    };
  },
  created() {},
  computed: {
    carts() {
      return this.$store.state.goods.goods;
    }
  },
  watch: {
    carts(val) {
      this.goods = val;
      console.log("watch", this.goods);
    }
  },
  methods: {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
</style>