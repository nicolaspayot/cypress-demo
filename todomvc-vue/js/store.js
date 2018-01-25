/*jshint unused:false */

(function (exports) {

	'use strict';

	var STORAGE_KEY = 'todos-vuejs';

	const todosURL = 'http://127.0.0.1:3000/todos';

	exports.todoStorage = {
		fetch: function () {
			// return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
			return axios.get(todosURL).then(response => response.data);
		},
		save: function (todos) {
			// localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
			return axios.post(todosURL, todos);
		}
	};

})(window);
