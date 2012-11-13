/*jshint browser:true */
(function(window, encodeURIComponent) {
	"use strict";
	var pluginName = "FormSerializer",
		FormSerializer = window[pluginName] = window[pluginName] || {},
		toArray = function(x) { return [].slice.call(x); };

	FormSerializer.getData = function(form) {
		return toArray(form.elements).reduce(function(acc, el) {
			var name = el.name,
				type = el.type;
			if (name && !el.disabled) {
				switch (el.nodeName) {
				case 'INPUT':
					if (-1 != ['button', 'file', 'image', 'submit'].indexOf(type)) break;
					if ((type == 'radio' || type == 'checkbox') && !el.checked) break;
					acc.push([name, el.value]);
					break;

				case 'TEXTAREA':
					acc.push([name, el.value]);
					break;

				case 'SELECT':
					toArray(el.options).forEach(function(opt) {
						if (opt.disabled) return;
						if (opt.selected) acc.push([name, opt.value]);
					});
					break;
				}
			}
			return acc;
		}, []);
	};

	FormSerializer.serializeData = function(list) {
		return list.map(function(item) {
			return encodeURIComponent(item[0]) + '=' + encodeURIComponent(item[1]);
		}).join('&');
	};

	FormSerializer.serialize = function(form) {
		if (form.nodeName !== 'FORM') return;
		return FormSerializer.serializeData(FormSerializer.getData(form));
	};
})(window, encodeURIComponent);
