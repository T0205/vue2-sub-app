const { name } = require('./package');
// 配置文件导出的对象用于设置 Vue CLI 创建的项目的一些属性
module.exports = {
  // publicPath 设置静态资源的访问路径
  publicPath: '/',
  // devServer 配置用于本地开发服务器
  devServer: {
    port: 3001,
    // headers 设置 HTTP 响应头
    headers: {
      'Access-Control-Allow-Origin': '*', // 允许跨域请求
    },
  },
  // configureWebpack 允许对 webpack 配置进行细粒度的定制
  configureWebpack: {
    output: {
      // library 设置库的名称，[name] 会被实际的 chunk 名称替换
      library: `${name}-[name]`,
      // libraryTarget 设置库的目标格式
      libraryTarget: 'umd', // 将微应用打包为 umd 库格式
      // chunkLoadingGlobal 设置全局的 webpack chunk loading 的名称
      chunkLoadingGlobal: `webpackJsonp_${name}`, // webpack 5 中需如此设置以替代 jsonpFunction
    },
  },
};