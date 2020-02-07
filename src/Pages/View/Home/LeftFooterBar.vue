<template>
  <div>
    <el-row>
      <el-col :md="24">
        <EChart style="height:280px;" :optionsData="optionsData"></EChart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EChart from "./../EChart";
export default {
  components: {
    EChart
  },
  data() {
    return {
      optionsData: {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "2017", "2018", "2019"],
            [" Latte", 43.3, 85.8, 93.7],
            [" Tea", 83.1, 73.4, 55.1],
            [" Cocoa", 86.4, 65.2, 82.5],
            [" Brownie", 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
      }
    };
  },
  created() {},
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>
<style lang='scss' scoped>

</style>