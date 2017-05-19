function myReplace(str, before, after) {
	const arrBefore = before.split('');
	const arrAfter = after.split('');
	regexp = /^[A-Z]/;
	if (regexp.test(arrBefore[0]))
 {
		arrAfter[0] = arrAfter[0].toUpperCase();
	}
	before = arrBefore.join('');
	after = arrAfter.join('');
	let newstr = str.replace( before, after);
	return newstr;
}

console.log(myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped'));
console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'));
