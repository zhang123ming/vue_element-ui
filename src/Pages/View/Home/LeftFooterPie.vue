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
        title: {
          text: "数据统计",
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          bottom: 20,
          left: "center",
          data: ["Vue", "Jquery", "Bootstrap", "JS", "HTML"]
        },
        series: [
          {
            type: "pie",
            radius: "50%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              { value: 1548, name: "VUe" },
              { value: 535, name: "Jquery" },
              { value: 510, name: "Bootstrap" },
              { value: 634, name: "JS" },
              { value: 735, name: "HTML" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
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
</style>