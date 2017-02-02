const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackBase = require("./webpack-base");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = require('./config');
const prodConfig = {
    entry: webpackBase._entry,
    output: {
        filename: 'scripts/[name].[chunkhash:5].js',
        path: config.buildDir + '/assets/'
    },
    module: webpackBase._module,
    resolve: webpackBase._resolve,
    devServer: {
        contentBase: './build',
        hot: true,
        inline: true
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'scripts/[name].[chunkhash:5].bundle.js'
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.(css|js)$/, // optionally pass test, include and exclude, default affects all loaders
            // 可以传入 test、include 和 exclude，默认会影响所有的 loader
            minimize: true
        }),
        new ExtractTextPlugin("styles/[name].[chunkhash:5].css"),
        new HtmlWebpackPlugin({
            template: config.srcDir + '/index.html',
            filename: config.buildDir + '/views/index.html',
            minify: {
                removeCommets: true,
                collapseWhitespace: true
            }
        })
    ]
};
module.exports = prodConfig;