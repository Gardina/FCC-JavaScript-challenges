function confirmEnding(str, target) {
	let end = str.substr(-target.length);
	if (target === end) {
		return true;
	} else {
		return false;
	}
}

confirmEnding('Bastian', 'n');


//better
function end(str, target) {
	return (str.substr(-target.length) === target);
}
