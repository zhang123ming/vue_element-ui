<template>
  <div ref="echart" id="echart"></div>
</template>

<script>
export default {
  props: ["optionsData"],
  components: {},
  data() {
    return {};
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    }
  },
  created() {
    this.$nextTick(() => {
      this.getEchartData();
    });
  },
  watch: {
    optionsData(val) {
      this.optionsData = val;
    },
    isCollapse() {
      this.getEchartData();
    }
  },
  methods: {
    getEchartData() {
      const chart = this.$refs.echart;
      if (chart) {
        const myEChart = this.$echarts.init(chart);
        myEChart.setOption(this.optionsData);
        myEChart.resize();
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.getEchartData);
  },
  destroyed() {
    window.removeEventListener("resize", this.getEchartData);
  }
};
</script>
<style lang='scss' scoped>
</style>