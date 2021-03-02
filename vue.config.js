module.exports = {
  productionSourceMap: false,
  chainWebpack(config) {
    if (process.env.NODE_ENV === 'development') {
      config.module
        .rule('eslint')
        .use('eslint-loader')
        .options({
          formatter: require('eslint-formatter-pretty')
        })
    }
    config.plugins.delete('prefetch')
  }
}
