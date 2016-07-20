module.exports = {
  entry: './app/main.js',
  output: {
    path: './www/',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3003
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread'
          ]
        }
      }
    ]
  }
}
