 const auth = {
   state: {
     userInfo: JSON.parse(localStorage.getItem("userInfo")) || {},

   },
   mutations: {
     SET_USERINFO(state, userInfo) {
       console.log("save==");
       window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
       state.userInfo = userInfo;
     },
     CLEAR_USERINFO_OR_TOKEN(state) {
       console.log("clear")
       window.localStorage.clear();
       state.userInfo = {};
     }
   },
   getters: {
     getUserInfo: state => {
       return state.userInfo;
     }
   }

 }
 export default auth;
