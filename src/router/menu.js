/**
 * 页面菜单、地址配置
 */
const pages = [{
    menuName: '笔记',
    path: 'Notes',
    menuChilds: [{
        menuName: '笔记详情',
        path: 'Notes/Detail/:plan',
        menuChilds: []
    }]
}, {
    menuName: '文章',
    path: 'Article',
    menuChilds: [{
        menuName: '文章详情',
        path: 'Articles/Detail/:plan',
        menuChilds: []
    }]
}, {
    menuName: '关于',
    path: 'About',
    menuChilds: []
}];
export default pages