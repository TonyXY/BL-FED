const path = require('path');
const config = require('../config');
const utils = require('./utils');
const webpack = require('webpack');
const vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}
module.exports = {
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
			'@': resolve('src')
		}
	},
	module: {
		rules: [{
			test: /\.(js|vue)$/,
			loader: 'eslint-loader',
			enforce: 'pre',
			include: [resolve('src')],
			options: {
				formatter: require('eslint-friendly-formatter')
			}
		}, {
			test: /\.vue$/,
			loader: 'vue-loader',
			options: vueLoaderConfig
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			include: [resolve('src'), resolve('test')]
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url-loader',
			query: {
				limit: 10000,
				name: utils.assetsPath('images/[name].[ext]?v=[hash:7]')
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
			loader: 'url-loader',
			query: {
				limit: 10000,
				name: utils.assetsPath('css/fonts/[name].[ext]?v=[hash:7]')
			}
		}, {
			test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: utils.assetsPath('media/[name].[hash:7].[ext]')
			}
		}]
	},
	plugins: [

	]
}
