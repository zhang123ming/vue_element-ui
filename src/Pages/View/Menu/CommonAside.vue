<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <el-menu-item
        :index="item.path"
        @click="setItemTab(item)"
        v-for="item in noChildren"
        :key="item.label"
      >
        <template>
          <i :class="'el-icon-'+item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </template>
      </el-menu-item>
      <el-submenu index="index" v-for="(hasItem,index) in hasChildren" :key="index">
        <template slot="title">
          <i :class="'el-icon-'+hasItem.icon"></i>
          <span>{{hasItem.label}}</span>
        </template>

        <el-menu-item-group v-if="hasItem.children">
          <el-menu-item
            :index="chil.path"
            @click="setItemTab(chil)"
            v-for="(chil,subIndex) in hasItem.children"
            :key="subIndex"
          >
            <template>
              <i :class="'el-icon-'+chil.icon" v-if="chil.icon"></i>
              <span>{{chil.label}}</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isCollapse: this.$store.state.tab.isCollapse,
      asideMenu: [
        {
          path: "/demo/home",
          label: "首页",
          name: "Home",
          icon: "s-home"
        },
        {
          path: "/demo/video",
          label: "视频管理",
          name: "Video",
          icon: "video-play"
        },
        {
          path: "/demo/user",
          label: "用户管理",
          name: "User",
          icon: "user"
        },
        {
          path: "/demo/cart",
          label: "购物车",
          name: "Cart",
          icon: "goods"
        },

        {
          label: "其他",
          icon: "setting",
          children: [
            {
              path: "/demo/other1",
              label: "二级页面1",
              name: "Other1",
              icon: "receiving"
            },
            {
              path: "/demo/other2",
              label: "二级页面2",
              name: "Other2",
              icon: "house"
            }
          ]
        }
      ]
    };
  },
  created() {},
  computed: {
    CloseAside() {
      return this.$store.state.tab.isCollapse;
    },
    noChildren() {
      return this.asideMenu.filter(item => !item.children);
    },
    hasChildren() {
      return this.asideMenu.filter(item => item.children);
    }
  },
  watch: {
    CloseAside(val) {
      this.isCollapse = val;
    }
  },
  methods: {
    setItemTab(item) {
      this.$store.commit("SET_TAB", item);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.el-menu {
  height: 100vh;
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>