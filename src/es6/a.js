define([],function () {
	// body...
	var a = [];
	for (let i = 0; i < 10; i++) {
	  a[i] = function () {
	    console.log(i);
	  };
	}
	a[6]();

	let arrayLike = {
	    '0': 'a',
	    '1': 'b',
	    '2': 'c',
	    length: 3
	};

	// ES5的写法
	var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

	// ES6的写法
	let arr2 = Array.from(arrayLike);
	
	return a;
})