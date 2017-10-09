var merge = require('webpack-merge')
var stgEnv = require('./stg.env')

module.exports = merge(stgEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"//www.baidu.com/dev/api"',
  webjs: 'https://www.baidu.com/dev/webjs.js'
})
