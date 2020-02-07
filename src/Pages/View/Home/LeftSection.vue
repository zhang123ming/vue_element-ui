<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card shadow="hover">
          <EChart style="height:270px;" :optionsData="optionsData"></EChart>
        </el-card>
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
      echartData: ["Vue", "Bootstrap", "Jquery", "HTML", "CSS", "Javascript"],
      optionsData: {
        title: {
          text: "ECharts"
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          //边距
          left: "6%",
          right: "4%",
          containLabel: false
        },
        legend: {
          data: this.echartData
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#333"
            }
          },
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {},
        series: [
          {
            name: "Vue",
            type: "line",
            stack: "总量",
            data: [123, 935, 601, 178, 990, 30, 356]
          },
          {
            name: "Bootstrap",
            type: "line",
            stack: "总量",
            data: [902, 122, 151, 354, 830, 930, 989]
          },
          {
            name: "Jquery",
            type: "line",
            stack: "总量",
            data: [762, 132, 541, 534, 390, 330, 98]
          },
          {
            name: "HTML",
            type: "line",
            stack: "总量",
            data: [242, 910, 551, 934, 390, 230, 409]
          },
          {
            name: "CSS",
            type: "line",
            stack: "总量",
            data: [952, 334, 521, 845, 590, 850, 100]
          },
          {
            name: "Javascript",
            type: "line",
            stack: "总量",
            data: [102, 232, 901, 534, 390, 180, 900]
          }
        ]
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
.el-row {
  .el-card {
    height: 300px;
  }
}
</style>