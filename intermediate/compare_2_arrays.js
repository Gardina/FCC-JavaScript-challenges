function diffArray(arr1, arr2) {
	let original = [];
	for (var i = 0; i < arr1.length; i++) {
		let index = arr2.indexOf(arr1[i]);
		if (index === -1) {
			original.push(arr1[i]);
		}
	}
	for (var i = 0; i < arr2.length; i++) {
		let index = arr1.indexOf(arr2[i]);
		if (index === -1) {
			original.push(arr2[i]);
		}
	}
	return original;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']));
console.log(diffArray(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']));
// console.log(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']));


function diff(arr1, arr2) {
	var newArr = arr1.concat(arr2);

	function check(item) {
		if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
			return item;
		}
	}

	return newArr.filter(check);
}
