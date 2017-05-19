// to filter arr
function bouncer(arr) {
	const bouncer = (a) => {
		if(a){
			return a;
		}
	};
	const bounced = arr.filter(bouncer);
	return bounced;
}

bouncer([7, 'ate', '', false, 9]);


///
function bouncer(arr) {
	function isTruthy(arg){
		return Boolean(arg);
	}
	var filteredArray = arr.filter(isTruthy);
	return filteredArray;
}
