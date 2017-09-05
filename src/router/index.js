/**
 * 路由配置
 */
import Vue from 'vue';
import Router from 'vue-router';//https://router.vuejs.org/zh-cn/
import marked from 'marked';
import Header from '@/common/Header';
import Main from '@/common/Main';
import MainH from '@/common/MainH';
import Footer from '@/common/Footer';
import pages from "@/router/menu";

window.marked = marked;
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
    }
});
Vue.use(Router);
let children = [];
let initBread = [{ //初始面包屑
    name: '首页',
    path: '/Home'
}];
getRouteObj(pages, initBread);
//多级菜单路由动态生成
function getRouteObj(level, breadMenu) {
    level.forEach((p, i) => {
        let currBread = breadMenu.concat();
        if (p.menuName != '首页') {
            currBread.push({
                name: p.menuName,
                path: '/'+p.path
            });
        }
        let pArr = p.path.split('/:');
        let pname = pArr.length > 1 ? pArr[0] : p.path;
        children.push({
            name: pname,
            path: '/' + p.path,
            meta:{
                breadcrumb:currBread
            },
            component: resolve => require(['@/components/' + pname + '.vue'], resolve)
        });
        let menuChilds = p.menuChilds;
        if (menuChilds) {
            getRouteObj(menuChilds, currBread);
        }
    });
}
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
        children: children
    }, {
        path: '/Dashboard2',
        redirect: '/Home',
        components: {
            header: Header,
            footer: Footer,
            default: MainH
        },
        children: [{
            name: 'Home',
            path: '/Home',
            component: resolve => require(['@/components/Home.vue'], resolve)
        }]
    }]
})
