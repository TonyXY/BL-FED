import Vue from 'vue';
import Vuex from 'vuex';//https://vuex.vuejs.org/zh-cn/

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        breadcrumb: [],//面包屑
        mdText:''
    },
    mutations: {//事件处理器用来驱动状态的变化，必须是同步函数
        updateMdText(state, response) {
            state.mdText = response;
        },
        initBreadcrumb(state, breadcrumb){
            state.breadcrumb = breadcrumb;
        }
    },
    actions: {//Action 提交的是mutation，而不是直接变更状态,可以包含任意异步操作
    }
});