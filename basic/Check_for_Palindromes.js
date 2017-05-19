//my solution
function palindrome (str) {
	let arr = [];
	str = str.toLowerCase();
	let spacesCommas = /\s|\.|,|_|-|\\|\/|\)|\(/g;
	let noSpaceStr = str.replace(spacesCommas, '');
	arr = noSpaceStr.split('');
	arr.reverse();
	let reversedStr = arr.join('');
	if (reversedStr === noSpaceStr) {
		return true;
	} else {
		return false;
	}
}

palindrome('eye');


// another solution
function palindrome(str) {
	return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

//one more
function palindrome(str) {
	str = str.toLowerCase().replace(/[\W_]/g, '');
	for(var i = 0, len = str.length - 1; i < len/2; i++) {
		if(str[i] !== str[len-i]) {
			return false;
		}
	}
	return true;
}

// with recursion

function palindrome(str) {
// make all letters lowercase and remove non-alphanumeric characters
	str = str.toLowerCase().replace(/[^a-z|0-9]/g, '');

  // if the length of the string is 0 then it is a palindrome
	if (str.length === 0){
		return true;
	}
  // if the first letter and the last letter of the string
  // do not equal each other, then it is not a palindrome
	if (str[0] !== str[str.length-1]){
		return false;
	}
  //Else, run the function without the first and last characters.
	else{
		return palindrome(str.slice(1,str.length - 1));
	}
}
