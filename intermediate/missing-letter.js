function fearNotLetter(str) {
	var arr =[];
	var letter;
	for (var i = 0; i < str.length; i++) {
		let temp = str.charCodeAt(i);
		arr.push(temp);
		if ( arr[i-1] !== (temp-1) && i!==0 ) {
			letter = String.fromCharCode(temp-1);
		}
	}
	return letter;
}

fearNotLetter('bcd');
fearNotLetter('abce');
