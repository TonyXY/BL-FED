// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import iView from 'iview';
import App from './App';
import router from './router';
import config from './config/api';
import webComm from './common';
console.log(webComm);
window.webComm = webComm;
Vue.use(Vuex);
Vue.use(iView);
window.store = new Vuex.Store({
	state: {
		breadcrumb: []
	},
	mutations: {
		// increment: state => state.count++,
		// decrement: state => state.count--
	}
})
Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
	iView.LoadingBar.start();
	if (to.meta.breadcrumb) {
		store.state.breadcrumb = to.meta.breadcrumb;
	} else {
		store.state.breadcrumb = [];
	}
	next();
});
router.afterEach(() => {
	iView.LoadingBar.finish();
	window.scrollTo(0, 0);
});
const myApp = new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: {
		App
	}
});
