import webpack from 'webpack';
import path from 'path';

export default {
  debug : true,
  devtool : 'cheap-module-eval-source-map',
  noInfo : false,
  entry : [
    'webpack-hot-middleware/client?reload=true', //if hot reloading is failed, webpack will automatically reloads the page,
    './src/index'
  ],
  target : 'web',
  output : {
    path : __dirname + '/dist',
    publicPath : '/',   //in dev webpack will not produce physical file
    filename : 'bundle.js'
  },
  devServer : {
    contentBase : './src'
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()  //keep webpack to reload although error happend
  ],
  module : {
    loaders : [
      {
        test : /.js$/,
        include : path.join(__dirname, 'src'),
        loaders : ['babel']
      },
      {
        test : /(\.css)$/,
        loaders : [
          'style',
          'css'
        ]
      },
      {
        test : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader : 'file'
      },
      {
        test : /\.(woff|woff2)$/,
        loader : "url?prefix=font/&limit=5000"
      },
      {
        test : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader : "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader : "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
};