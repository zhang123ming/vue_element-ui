 const auth = {
   state: {
     userInfo: JSON.parse(localStorage.getItem("userInfo")) || {},

   },
   mutations: {
     SET_USERINFO(state, userInfo) {
       window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
       state.userInfo = userInfo;
     },
   
   },
   getters: {
     getUserInfo: state => {
       return state.userInfo;
     }
   }

 }
 export default auth;
