
module.exports = {
  publicPath: '/',
  outputDir: 'web',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:8044',
      },
    },
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
