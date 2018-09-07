/*
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://api-dev"',  //开发环境的数据请求基础URL
})
*/
module.exports = {
    NODE_ENV: '"development"',
    ENV_CONFIG: '"dev"',
    BASE_API: '"https://api-dev"'
}
