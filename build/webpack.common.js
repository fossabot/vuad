const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/main.tsx',
  module: {
    rules: [
      {
        test: /\.jsx|tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader', 
          'eslint-loader'
        ]
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new Dotenv({
      path: './.env'
    })
  ],

  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@@': path.resolve(__dirname, '../src/modules'),
      'atoms': path.resolve(__dirname, '../src/components/atoms'),
      'molecules': path.resolve(__dirname, '../src/components/molecules'),
      'organisms': path.resolve(__dirname, '../src/components/organisms'),
      'templates': path.resolve(__dirname, '../src/components/templates'),
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}
