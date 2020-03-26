<template>
  <div>
    <CartList style="margin-bottom:50px"></CartList>
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
    return {};
  },
  created() {
    this.getGoods();
  },
  computed: {},
  watch: {},
  methods: {
    getGoods() {
      this.$http.get("./../../../../static//goods.json").then(res => {
        let data = res.data.message;
        for (let i = 0; i < data.length; i++) {
          data[i].checked = false;
          data[i].count = 1;
        }
        this.$store.commit("SET_GOODS", data);
      });
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
</style>