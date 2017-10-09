/* eslint-disable */
import Vue from 'vue';
Vue.directive('clickoutside', {
	bind(el, binding, vnode) {
		function documentHandler(e) {
			if (el.contains(e.target)) {
				return false;
			}
			if (binding.expression) {
				binding.value(e);
			}
		}
		el.__vueClickOutside__ = documentHandler;
		document.addEventListener('click', documentHandler);
	},
	unbind(el, binding) {
		document.removeEventListener('click', el.__vueClickOutside__);
		delete el.__vueClickOutside__;
	}
});
Vue.directive('monitor', {
	bind(el, binding, vnode) {
		el.__vueMonitor__ = {
			focus(e){
				var inputName = binding.expression;
				if (binding.arg){
					inputName = binding.arg + inputName;
				}
				var options = {
					action: 'focus',
					inputName: inputName,
					inputValue: el.value,
					type: el.type
				}
			},
			blur(e){
				var inputName = binding.expression;
				if (binding.arg) {
					inputName = binding.arg + inputName;
				}
				var options = {
					action: 'blur',
					inputName: inputName,
					inputValue: el.value,
					type: el.type
				}
			}
		};
		el.addEventListener('focus', el.__vueMonitor__.focus);
		el.addEventListener('blur', el.__vueMonitor__.blur);
	},
	unbind(el, binding) {
		el.removeEventListener('focus', el.__vueMonitor__.focus);
		el.removeEventListener('blur', el.__vueMonitor__.blur);
		delete el.__vueMonitor__;
	}
});
Vue.directive('monitorClick', {
	bind(el, binding, vnode) {
		el.__vueMonitor__ = {
			click(e) {
				var options = {
					action: 'click',
					inputName: '',
					inputValue: '',
					type: binding.arg
				};
				if(binding.expression.indexOf('{')!=0){
					options.inputName = binding.expression;
					options.inputValue = binding.value;
				}else{
					options.inputName = binding.value.name;
					options.inputValue = binding.value.value;
				}
			}
		};
		el.addEventListener('click', el.__vueMonitor__.click);
	},
	unbind(el, binding) {
		el.removeEventListener('click', el.__vueMonitor__.click);
		delete el.__vueMonitor__;
	}
});
Vue.prototype.monitorClick = function (inputName, inputValue,type) {
	var options = {
		action: 'click',
		inputName: inputName,
		inputValue: inputValue,
		type: type?type:'button'
	};
};