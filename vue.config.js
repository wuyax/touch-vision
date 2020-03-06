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
    }
  }
}
