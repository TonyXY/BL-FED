import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Header from '@/common/Header'
import Main from '@/common/Main'
import Footer from '@/common/Footer'

Vue.use(Router);

// axios.get('http://localhost:3000/dist/online/dev/assets/mockdata/cardInfo.json')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
var pages = [
    "Home",
    "About",
    "Notes",
    "Article"
];
var children = [];
pages.forEach((p) => {
    children.push({
        path:'/'+p,
        component:resolve => require(['@/components/'+p+'.vue'], resolve)
    })
});
export default new Router({
    //当你使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id，也好看！
    //不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404，这就不好看了。
    //https://router.vuejs.org/zh-cn/essentials/history-mode.html
    // mode: 'history',
    routes: [{
        path: '/', //重定向初始页面
        redirect: '/Home'
    }, {
        path: '/Dashboard',
        redirect: '/Home',
        components: {
            header: Header,
            footer: Footer,
            default: Main
        },
        children:children
    }]
})
