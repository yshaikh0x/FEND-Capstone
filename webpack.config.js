const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    devtool: 'source-map',
    devServer: {
        proxy: {
          '/all': 'http://localhost:8081',
        },
      },
    module: {
        rules: [
            {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
        }
        ],

            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
         
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
    })
    ]
    }}