/**
 * common
 * 全局方法定义
 **/
/* eslint-disable */
import Vue from 'vue';
import config from './config/api';
import axios from 'axios'; //https://github.com/mzabriskie/axios ,https://www.kancloud.cn/yunye/axios/234845
// console.log(config.api_root);
// 添加请求检查器
axios.interceptors.request.use(function (config) {
	// Do something before request is sent
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});
// 添加响应检查器
axios.interceptors.response.use(function (response) {
	// Do something with response data
	return response;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});
export default {
	config: config,
	os: jQBrowser,
	getMathRandom: function () {
		var round = Math.random();
		if (round.toString().length > 18) {
			return round.toString().substring(0, 18);
		} else {
			return round;
		}
	},
	/**
	 * @function isUndefinedOrNull
	 * @returns return true if the object is undefined or null, otherwise return false
	 */
	isUndefinedOrNull: function (str) {
		if (typeof (str) == "undefined") {
			return true; // it is undefined
		} else if (!str && str != 0) {
			return true; // it is null
		}
		return false;
	},
	/**
	 * @function trim
	 * @returns trim the string blank
	 */
	trim: function (str) {
		if (this.isUndefinedOrNull(str)) {
			return str;
		}
		return str.replace(/^\s+|\s+$/g, '');
	},
	/**
	 * @function parseURL
	 * @param url,the window.location or a url string,use current domain url if don't pass the url;
	 * @returns a object with source,protocol,port, query,params,hash;
	 */
	parseURL: function (url) {
		var a = document.createElement('a');
		a.href = url;
		return {
			source: url,
			protocol: a.protocol.replace(':', ''),
			host: a.hostname,
			port: a.port,
			query: a.search,
			params: (function () {
				var ret = {},
					seg = a.search.replace(/^\?/, '').split('&'),
					len = seg.length,
					i = 0,
					s;
				for (; i < len; i++) {
					if (!seg[i]) {
						continue;
					}
					s = seg[i].split('=');
					ret[s[0]] = s[1];
				}
				return ret;
			})(),
			hash: a.hash.replace('#', '')
		};
	},
	baseRequest: function (interfaceName, options) { //请求基础方法(接口名称，请求参数)
		var baseParams = {}; //定义基础参数
		var opt = Vue.util.extend(baseParams, options.data);
		var qs = require('qs');
		var headers = {
			'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8"		
		};
		if (options.noSessionFlag){
			headers = {
				'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8"
			};
		}
		axios({
				method: options.method ? options.method : 'post',
				baseURL: config.api_root,
				url: interfaceName,
				data: qs.stringify(opt),
				headers: headers,
				timeout: 60000,
				withCredentials: true
			})
			.then(function (response) {
				var answ = response.data;
				options.callback && options.callback(answ);
			})
			.catch(function (error) {
				options.errorback && options.errorback({ message:'网络异常，请稍后重试。'});
				Promise.reject(error);
			});
	},
	baseRequestFile: function (interfaceName, options) { //请求json等文件基础方法(接口名称，请求参数)
		axios.get(interfaceName)
			.then(function (response) {
				options.callback && options.callback(response.data);
			})
			.catch(function (error) {
				options.errorback && options.errorback({ message: '网络异常，请稍后重试。' });
				Promise.reject(error);
			});
	}
};

