# bolin

> this is a bolin project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 插件教程链接
>* vue-cli:https://github.com/vuejs/vue-cli
>* webpack:https://doc.webpack-china.org/guides
>* vue: https://cn.vuejs.org/v2/guide/
>* vuex（状态管理）: https://vuex.vuejs.org/zh-cn/
>* vue-router（路由）: https://router.vuejs.org/zh-cn/
>* axios（XMLHttpRequests）: https://github.com/mzabriskie/axios

## 项目结构
``` bash
├── build                            // 项目构建(webpack)相关代码，使用npm run * 时执行的就是这里的文件
│   ├── build.js                     // 生产环境构建代码
│   ├── check-version.js             // 检查node、npm等版本
│   ├── dev-client.js                // 热重载相关
│   ├── dev-server.js                // 构建本地服务器
│   ├── stg.js                       // 测试环境构建代码
│   ├── utils.js                     // 构建工具相关 css
│   ├── webpack.base.conf.js         // webpack基础配置 entry入口、output输出，loader加载器，plugins插件
│   ├── webpack.dev.conf.js          // webpack开发环境配置
│   ├── webpack.stg.conf.js          // webpack测试环境配置
│   └── webpack.prod.conf.js         // webpack生产环境配置
├── config                           // 项目开发环境配置，执行文件需要的配置信息
│   ├── dev.env.js                   // 开发环境变量
│   ├── index.js                     // 项目一些配置变量
│   ├── prod.env.js                  // 生产环境变量
│   ├── prod.env.js                  // 测试环境变量
│   └── test.env.js                  // 代码测试环境变量
├── src                              // 源码目录
│   ├── assets                       // 资源文件夹，放css、字体、图片之类的资源
│   ├── common                       // vue公共组件，定义公共header、footer、main
│   ├── components                   // vue组件文件夹
│   ├── config                       // 配置文件，API接口地址
│   ├── router                       // 路由文件夹，决定了页面的跳转规则
│   │   ├── index.js                 // 路由入口
│   │   └── menu.js                  // 页面菜单、地址配置
│   ├── store                        // vuex的状态管理
│   ├── App.vue                      // 页面入口文件，所有自己写的组件，都是在这个组件之上运行
│   ├── common.js                    // 全局方法定义，公共ajax请求之类的
│   └── main.js                      // 程序入口文件，加载各种公共组件
├── static                           // 静态文件，比如一些图片，json数据等
├── .babelrc                         // ES6语法编译配置
├── .editorconfig                    // 定义代码格式
├── .eslintignore                    // eslint忽略配置
├── .eslintrc                        // eslint配置
├── .postcssrc                       // postcss配置
├── .gitignore                       // git上传需要忽略的文件格式
├── README.md                        // 项目说明
├── favicon.ico 
├── index.html                       // 入口页面
└── package.json                     // 项目基本信息
```
