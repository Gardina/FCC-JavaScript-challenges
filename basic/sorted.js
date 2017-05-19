function getIndexToIns(arr, num) {
	let newArr = arr.sort(function(a, b) {
		return a - b;
	});
	console.log('sorted array' + newArr);
	let headArr = [];
	let tailArr = [];
	let result = [];
	for (var i = 0; i <= newArr.length; i++) {
		if (num <= arr[i]) {
			headArr = newArr.slice(0,i);
			headArr.push(num);
			tailArr = newArr.slice(i);
			result = headArr.concat(tailArr);
			i = newArr.length;
		}
		else  {
			result = newArr.push(num);
		}
	}
	return result.indexOf(num);
}




getIndexToIns([2, 5, 10], 15);

/////
function where(arr, num) {
	arr.sort(function(a, b) {
		return a - b;
	});
	for (var a in arr){
		if (arr[a] >= num)
			return a;
	}
	return arr.length;
}
