function sumFibs(num) {
	let fibArr = [0,1];
	for (var i = 2; i <= num; i++) {
		let fibNumb = fibArr[i-1]+fibArr[i-2];
		if (fibNumb<=num) {
			fibArr.push(fibNumb);
		}
	}
	let oddArr = fibArr.filter((item) => {
		return item % 2 !== 0;
	});
	let sum = oddArr.reduce(function(acc, val) {
		return acc + val;
	},0);
	return sum;
}

console.log(sumFibs(75025));
console.log(sumFibs(75024));
