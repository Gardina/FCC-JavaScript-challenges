function uniteUnique(arr) {
	var newArr =arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		var temp = arguments[i].filter((item) => {
			if (arguments[i-1].indexOf(item) === -1) {
				return true;
			}
		});
		newArr = newArr.concat(temp);
		arguments[i] = newArr.concat(temp);
	}
	return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
