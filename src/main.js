// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';//https://cn.vuejs.org/v2/guide/
import iView from 'iview';
import App from './App';
import store from './store';
import router from './router';
import webComm from './common';
window.webComm = webComm;

Vue.use(iView);

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
