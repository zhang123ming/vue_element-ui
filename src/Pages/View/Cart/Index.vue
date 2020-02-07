<template>
  <div>
    <CartList  style="margin-bottom:50px"></CartList>
    <CartCalculator></CartCalculator>
  </div>
</template>

<script>
import CartList from "./CartList";
import CartCalculator from "./CartCalculator";
export default {
  components: {
    CartList,
    CartCalculator
  },
  data() {
    return {
      goods: []
    };
  },
  created() {
    this.getGoods();
  },
  computed: {},
  watch: {},
  methods: {
    getGoods() {
      this.$http.get("./../../../../static//goods.json").then(res => {
        this.goods = res.data.message;
        this.$store.commit("SET_GOODS", this.goods);
      });
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
</style>