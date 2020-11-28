const path = require('path')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  }
}

// https://koklub-development-v1.herokuapp.com/