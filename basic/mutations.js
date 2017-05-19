
function mutation(arr) {
	let first = arr[0].toLowerCase();
	let second = arr[1].toLowerCase().split('');
	for (let a in second) {
		let test = first.indexOf(second[a]);
		if (test < 0){
			return false;
		}
	}
	return true;
}

mutation(['hello', 'hey']);


//another
function mutation(arr) {

	var first = arr[0].toLowerCase().split('');
	var second = arr[1].toLowerCase().split('');
	var temp = 0;
    // Check every character and if the index is found add one
	for (var s in second){
		if (first.indexOf(second[s]) > -1) {
			temp+= 0;
		} else
            temp+=1;
	}
	if (temp === 0)
		return true;
	else
        return false;
}
