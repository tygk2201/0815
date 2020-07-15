import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    //全局变量初始化
    state:{
        isChange:true,
        count:1
    },
    //定义gette函数 相当于计算属性 有返回值
    getters:{
        getGlobalUserInfo: (state) => {
			return state.globalUserInfo;
        },
        getterCount(state) {
            return (state.count += 10)
        }
    },
    //定义set函数
    mutations:{
        setGlobalUserInfo:(state, newGlobalUserInfo)=>{
            state.globalUserInfo = { ...state.globalUserInfo, ...newGlobalUserInfo };
        }

    }
});
export default store;