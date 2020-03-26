<template>
  <div>
    <el-row>
      <el-col :md="24">
        <el-tag
          :key="tag.name"
          v-for="tag in tags"
          :closable="tag.name!='Home'"
          size="small"
          class="tab_tag"
          type="success"
          :disable-transitions="false"
          @close="handleClose(tag)"
          :effect="$route.name===tag.name?'dark':'plain'"
        >
          <router-link :to="{name:tag.name}">{{tag.label}}</router-link>
        </el-tag>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tags: this.$store.state.tab.tabsList
    };
  },
  created() {},
  computed: {},
  watch: {},
  methods: {
    handleClose(tag) {
      this.$store.commit("CLOSE_TABS", tag);
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.el-tag {
  margin-left: 10px;
  margin-top: 15px;
}

</style>