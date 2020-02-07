const goods = {
  state: {
    goods: [] || JSON.parse(localStorage.getItem("goods")),
    goodsObj: {},

  },
  /**
   * all_money: 0, //总价
   * all_select_count: 0, //商品选择个数
   * all_select_checkbox: false, //全选  取消全选
   * 
   * */
  mutations: {
    //   init
    SET_GOODS(state, goods) {
      window.localStorage.setItem("goods", JSON.stringify(goods));
      state.goods = goods;
    },
    // 全选 取消全选
    SET_ALLCHECKED(state, checked) {
      let goods = state.goods;
      // for (var i = 0; i < goods.length; i++) {
      //   goods[i].checked = checked;
      // }
      state.goods = goods;
      state.goodsObj.all_select_checkbox = checked;
      console.log("全选  取消全选");
    },
    // 单选
    SET_A_CHECKED(state, good) {
      let goods = state.goods;
      for (var i = 0; i < goods.length; i++) {
        if (goods[i].id === good.id) {
          goods[i] = good;
          console.log("单选", goods[i]);
        }
      }
      state.goods = goods;
      window.localStorage.setItem("goods", JSON.stringify(state.goods));

    },
    // 增加减少
    SET_GOODSNUMBER(state, good) {
      state.goods.map(item => {
        if (item.id == good.id) {
          item = good;
        }
      })
      window.localStorage.setItem("goods", JSON.stringify(state.goods));

    },

  },
  getters: {
    getGoodsObj(state) {
      let obj = {}
      let all_money = 0;
      let all_select_count = 0;
      let all_select_checkbox = false;
      let count = 0;
      state.goods.forEach(item => {
        if (item.checked) {
          all_money += item.number * item.price;
          all_select_count += item.number;
          count++;
        }
      })
      if (count == state.goods.length) {
        all_select_checkbox = true;

      } else {
        all_select_checkbox = false;

      }
      obj.all_money = all_money;
      obj.all_select_count = all_select_count;
      obj.all_select_checkbox = all_select_checkbox;
      return state.goodsObj = obj;
    },
  },

}
export default goods;
