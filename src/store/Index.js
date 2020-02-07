import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
import auth from "./Auth.js"
import tab from "./Tab"
import goods from "./goods"

export default new Vuex.Store({
  modules: {
    auth,
    tab,
    goods
  }
})
