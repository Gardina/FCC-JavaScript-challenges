
function factorialize (num) {
	if ( typeof num === 'number') {
		if (num === 0) {
			num = 1;
		}
		else {
			let arr =[];
			for ( let i = num; i>=1; i--) {
				arr.push(i);
			}
			num = arr.reduce(function(acc, val) {
  	     return acc*val;
			});
		}
		return num;
	}

	else {
		console.log('not a number');
	}
}
factorialize(5);


//better code from github
function factorialize(num) {
	var factorial = 1;
	for (var n = 2; n <= num; n++) {
		factorial = factorial * n;
	}

	return factorial;
}
