const path = require('path');
const config = require('../config');
const utils = require('./utils');
const webpack = require('webpack');
const vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = function() {
    return {
        entry: {
            app: './src/main.js'
        },
        output: {
            path: config.build.assetsRoot,
            filename: '[name].js',
            publicPath: process.env.NODE_ENV === 'production' ?
                config.build.assetsPublicPath : config.dev.assetsPublicPath
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
            }
        },
        module: {
            rules: [{
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: vueLoaderConfig
                }, {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: [resolve('src'), resolve('test')]
                },{
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        name: utils.assetsPath('images/[name].[ext]?v=[hash:7]')
                    }
                },{
                    test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        name: utils.assetsPath('css/fonts/[name].[ext]?v=[hash:7]')
                    }
                },{
                    test: /\.css$/,
                    use: 'css-loader'
                    // use: ExtractTextPlugin.extract({
                    //     use: 'css-loader'
                    // })
                    // use: extractCSS.extract(['css-loader'])
                }, {
                    test: /\.less$/,
                    // use: extractLESS.extract(['css-loader', 'less-loader'])
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        'less-loader'
                    ]
                }
            ]
        },
        plugins: [

        ]
    };
}
