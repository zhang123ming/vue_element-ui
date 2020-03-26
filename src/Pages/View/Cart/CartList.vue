<template>
  <div>
    <el-row :gutter="10" v-if="goods">
      <el-col :span="8" v-for="good in getGoods" :key="good.id">
        <CartListItem :good="good"></CartListItem>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    ...mapGetters(["getGoods"])
  },
  watch: {},
  methods: {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
</style>