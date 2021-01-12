const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
let webpackPlugins = []
if (process.env.NODE_ENV === 'production') {
  webpackPlugins.push(new BundleAnalyzerPlugin())
}
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://14.205.92.201:8080/', // 接口域名
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': '/api' //需要rewrite重写的,
        },
        cookiePathRewrite: {
          //重写cookie路径
          '/api': '/'
        }
      }
    },
    configureWebpack: {
      externals: {
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        axios: 'axios'
      },
      plugins: webpackPlugins
    },
  }
}
