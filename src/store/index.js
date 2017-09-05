import Vue from 'vue';
import Vuex from 'vuex';//https://vuex.vuejs.org/zh-cn/

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        breadcrumb: []//面包屑
    },
    mutations: {
        // increment: state => state.count++,
        // decrement: state => state.count--
    },
    actions: {
        // increment(context) {
        //     context.commit('increment')
        // }
    }
});