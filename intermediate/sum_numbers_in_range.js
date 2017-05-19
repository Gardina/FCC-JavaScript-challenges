function sumAll(arr) {
	let start = arr.reduce((a, b) => {
		return Math.min(a, b);
	});
	let finish = arr.reduce((a, b) => {
		return Math.max(a, b);
	});
	let length =  finish - start;
	let tempArr = [];
	tempArr[0] = start;
	for (let i = 1; i <= length; i++) {
		tempArr.push(i+start);
	}
	let sum = tempArr.reduce(( val, acc ) => {
		return acc + val;
	}, 0 );
	return sum;
}


console.log(sumAll([1, 4]));


///---------------------------------------------------------------------
function sumAll(arr) {
	var max = Math.max(arr[0], arr[1]);
	var min = Math.min(arr[0], arr[1]);
	var temp = 0;
	for (var i=min; i <= max; i++){
		temp += i;
	}
	return(temp);
}
