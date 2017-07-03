// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import iView from 'iview';
import App from './App';
import router from './router';

Vue.use(Vuex);
Vue.use(iView);
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        // increment: state => state.count++,
        // decrement: state => state.count--
    }
})
Vue.config.productionTip = false;
router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});
const myApp = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});

