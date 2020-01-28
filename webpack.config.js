const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg|mp4)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets'
          }
        }]
      }
    ]
  }
}
