const path = require('path');
const HappyPack = require('happypack');
const OUT_PUT = path.resolve(__dirname, './dist');
const NOT_PATH = path.resolve(__dirname, './node_modules');

module.exports = {
  output: {
    chunkFilename: '[name].js',
    path: OUT_PUT
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.less'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js|ts|tsx)$/,
        use: ['happypack/loader?id=babel', 'happypack/loader?id=eslint'],
        exclude: NOT_PATH,
      },
      {
        test: /\.(less|css)$/,
        use: ['happypack/loader?id=less'],
      },
      {
        test: /\.(png|jpeg|gif|jpg|svg|icon|webp)$/,
        use: ['happypack/loader?id=photo'],
        exclude: NOT_PATH,
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'eslint',
      loaders: ['eslint-loader']
    }),
    new HappyPack({
      id: 'babel',
      loaders: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0']
        }
      }]
    }),
    new HappyPack({
      id: 'less',
      loaders: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          import: true
        }
      }, {
        loader: 'postcss-loader',
      }, {
        loader: 'less-loader',
        options: {
            javascriptEnabled: true,
        }
      }]
    }),
    new HappyPack({
      id: 'photo',
      loaders: [{
        loader: 'url-loader',
        options: {
          limit: 1024 * 10,
          fallback: 'file-loader',
        }
      }]
    })
  ]
}