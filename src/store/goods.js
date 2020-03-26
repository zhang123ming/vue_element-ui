const goods = {
  state: {
    goods: JSON.parse(localStorage.getItem("goods")) || [],
    all_money: 0,
    isAllSelect: false,
    allCount: 0,

  },
  mutations: {
    //   init
    SET_GOODS(state, goods) {
      window.localStorage.setItem("goods", JSON.stringify(goods));
      state.goods = goods;
    },
    // 全选 取消全选
    SELECTALL(state) {
      state.isAllSelect = !state.isAllSelect;
      if (state.isAllSelect) {
        state.goods.forEach((item) => {
          item.checked = true
        })
      } else {
        state.goods.forEach((item) => {
          item.checked = false;
        })
      }


    },
    // 单选
    SELECT(state, id) {
      for (let i = 0; i < state.goods.length; i++) {
        if (state.goods[i].id === id) {
          state.goods[i].checked = !state.goods[i].checked;
        }
      }
      let flag = state.goods.some((item) => {
        return item.checked == false;
      })
      if (!flag) {
        state.isAllSelect = true
      } else {
        state.isAllSelect = false;
      }
    },
  },

  getters: {
    getGoods(state) {
      if (state.allSelect) {
        state.goods.forEach(item => {
          item.checked = true;
        })
      }
      return state.goods;
    },
    getAllMoney(state) {
      let money = 0;
      state.goods.forEach((item) => {
        if (item.checked) {
          money += item.count * item.price;
        }
      })
      return state.all_money = money;
    },
    allSelsect(state) {
      if (state.isAllSelect) {
        state.goods.forEach((item) => {
          item.checked = true;
        })
      }
      return state.isAllSelect;
    },
    getCount(state) {
      let count = 0;
      state.goods.forEach((item) => {
        if (item.checked) {
          count += item.count;
        }
      })
      return state.allCount = count;
    }
  }

}
export default goods;
