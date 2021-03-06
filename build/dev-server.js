require('./check-versions')()
const path = require('path');
const webpack = require('webpack');
const express = require('express');
const opn = require('opn');
const child_process = require("child_process");
const webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf');
const proxyMiddleware = require('http-proxy-middleware');
const config = require('../config');

let app = express();
let compiler = webpack(webpackConfig);
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
// default port where dev server listens for incoming traffic
let port = process.env.PORT || config.dev.port;
// automatically open browser, if not set will be false
let autoOpenBrowser = !!config.dev.autoOpenBrowser;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
let proxyTable = config.dev.proxyTable;
let devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})


let hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
    let options = proxyTable[context]
    if (typeof options === 'string') {
        options = {
            target: options
        }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)
// serve pure static assets
let staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'));

let uri = 'http://localhost:' + port;

var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve
})

console.log('> Starting dev server...')
let server = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    const process = require('process');
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        console.log('> Listening at ' + uri + '\n')
        if (process.platform === 'win32') {
            opn(uri);
        } else {
            let spawn = child_process.spawn,
                openArgs = ['-a', 'Google\ Chrome'];

            if (config.dev.closeWebSecurity) {
                openArgs.push('--args', '--disable-web-security', '--user-data-dir', '--user-dir');
                //杀掉原chrome程序
                spawn('pkill', ['-9', 'Google\ Chrome']);
            }

            openArgs.push(uri);
            //打开指定页面
            spawn('open', openArgs, {
                stdio: 'inherit',
                // 仅在当前运行环境为 Windows 时，才使用 shell
                shell: process.platform === 'win32'
            });
        }
    }
    _resolve()
})

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}
