/**
 * common
 * 全局变量/方法定义
 **/
/* eslint-disable */
import axios from 'axios'
export default {
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
		axios.get(interfaceName)
			.then(function (response) {
				options.callback && options.callback(response);
			})
			.catch(function (error) {
				options.errorback && options.errorback(false);
			});
	},
	baseRequestFile: function (interfaceName, options) { //请求json等文件基础方法(接口名称，请求参数)
		axios.get(interfaceName)
			.then(function (response) {
				options.callback && options.callback(response);
			})
			.catch(function (error) {
				options.errorback && options.errorback(false);
			});
	}
};

