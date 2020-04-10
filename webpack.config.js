const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/'),
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      host: '0.0.0.0',
      port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: "My Form",
          template: './src/original.html'
        }),
        new HtmlWebpackExternalsPlugin({
            externals: [
              {
                module: 'google-share',
                entry: {
                  path: 'http://fonts.googleapis.com/css?family=Share:400,700',
                  type: 'css',
                },
              },
              {
                module: 'google-open-sans',
                entry: {
                  path: 'http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700s',
                  type: 'css',
                },
              },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
            },
        ],
    },
}