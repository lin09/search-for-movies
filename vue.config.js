module.exports = {
  indexPath: '../index.html',
  publicPath: process.env.NODE_ENV === 'production' ? 'search-for-movies/dist' : '/',
  configureWebpack: {
    externals: {
      'vue':'Vue',
      'axios': 'axios'
    }
  },
  devServer: {
    proxy: 'http://35.240.135.50/'
  }
}
