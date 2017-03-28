'use strict';

define([], function () {
	// body...
	var a = [];

	var _loop = function _loop(i) {
		a[i] = function () {
			console.log(i);
		};
	};

	for (var i = 0; i < 10; i++) {
		_loop(i);
	}
	a[6]();

	var arrayLike = {
		'0': 'a',
		'1': 'b',
		'2': 'c',
		length: 3
	};

	// ES5的写法
	var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

	// ES6的写法
	var arr2 = Array.from(arrayLike);

	return a;
});