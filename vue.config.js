// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  css: {
    extract: false
  },
  // 它支持webPack-dev-server的所有选项
  devServer: {
    proxy: {
      // host: "localhost",
      // port: 8080, // 端口号
      // https: false, // https:{type:Boolean}
      // open: false, // 配置自动启动浏览器
      // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理

      // 配置多个代理
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': '/mock'
        }

      }
    }
  }

}
