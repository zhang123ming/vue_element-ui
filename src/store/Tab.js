const tab = {
  state: {
    isCollapse: false,
    tabsList: [{
      label: "首页",
      path: "/",
      name: "Home"
    }],
    currentTab: null,
  },
  mutations: {
    SET_TAB(state, val) {
      if (val.name == "Home") {
        state.currentTab = null;
      } else {
        state.currentTab = val;
        let result = state.tabsList.findIndex(item => item.name === val.name);
        if (result == -1) {
          state.tabsList.push(val);
        }
      }
    },
    CLOSE_TABS(state, val) {
      let result = state.tabsList.findIndex(item => item.name === val.name);
      state.tabsList.splice(result, 1);
    },
    COLLAPSE_MENU(state) {
      state.isCollapse = !state.isCollapse;
    }
  },
  getters: {
    getCurrentTab: state => {
      return state.currentTab;
    }
  },

}
export default tab;
