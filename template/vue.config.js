const WebpackComplierVersionPlugin = require('@jeebey/WebpackComplierVersionPlugin')
const path = require('path')
const webpack = require('webpack')

// eslint-disable-next-line no-unused-vars
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  devServer: {
    port: 3000, // 端口
    proxy: {
      '/http': {
        target: 'http://',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/http': ''
        }
      },
      '/api': {
        target: 'http://t.weather.sojson.com/',
        pathRewrite: {
          '^/api': '/api'
        }
      },
      '/wd': {
        target: 'https://weedo.jeebey.com/',
        pathRewrite: {
          '^/wd': '/wd'
        }
      }
    }
  },
  lintOnSave: false, // 取消 eslint 验证
  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': 20190612
      }),
      new webpack.BannerPlugin('JuST4iT==> ' + new Date().toString()),
      new WebpackComplierVersionPlugin({
        path: './version.json'
      })
    ]
  }
}
