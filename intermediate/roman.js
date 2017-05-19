function convertToRoman(num) {
	console.log(num);
	let roman = [];
	let newRoman = [];
	let rest = num;
	let M = Math.floor(rest/1000);
	rest = rest%1000;
	let D = Math.floor(rest/500);
	rest = rest%500;
	let C = Math.floor(rest/100);
	// if (C>3) {
	// 	C = -1;
	// 	D = 1;
	// }
	rest = rest%100;
	let L = Math.floor(rest/50);
	rest = rest%50;
	let X = Math.floor(rest/10);
	// if (X>3) {
	// 	X = -1;
	// 	L = 1;
	// }
	rest = rest%10;
	let V = Math.floor(rest/5);
	rest = rest%5;
	let I = Math.floor(rest/1);
	console.log(`v = ${V}`);
	// if (I>3 && {
	// 	I = -1;
	// 	V = 1;
	// }
	roman.push(M,D,C,L,X,V,I);
	for (var i = 0; i < roman.length; i++) {
		if (roman[i] > 4) {
			if (roman[i-1]===0){
				roman[i] = -1;
				roman[i-1]+=1;
			} else if(roman[i-1]===1){
				roman[i]=1;
				roman[i-2]+=1;
			}
		}
	}
	console.log(roman);
	for (var i = 0; i < roman.length; i++) {
		  if (roman[i] !== 0) {
				 if (i === 0) {
					 let temp = 'M';
					 for (var a = 1; a < roman[i]; a++) {
					 	temp = temp + 'M';
					 }
					  newRoman.push(temp);

				 } else if (i === 1) {
					 let temp = 'D';
					 for (var a = 1; a < roman[i]; a++) {
						temp = temp + 'D';
					 }
					newRoman.push(temp);

				 } else if (i === 2) {
					 let temp = 'C';
					 for (var a = 1; a < roman[i]; a++) {
						temp = temp + 'C';
					 }
					 if (roman[i]>0){
						 newRoman.push(temp);
					 } else {
					 	 newRoman.splice(1,0,'C');
					 }

				 } else if (i === 3) {
					 let temp = 'L';
					 for (var a = 1; a < roman[i]; a++) {
						temp = temp + 'L';
					 }
					 newRoman.push(temp);

				 } else if (i === 4) {
					 let temp = 'X';
					 for (var a = 1; a < roman[i]; a++) {
						temp = temp + 'X';
					 }
					 if (roman[i]>0){
						 newRoman.push(temp);
					 } else {
					 	 newRoman.splice(1,0,'X');
					 }

				 } else if (i === 5) {
					 let temp = 'V';
					 for (var a = 1; a < roman[i]; a++) {
						temp = temp + 'V';
					 }
					 newRoman.push(temp);

				 } else if (i === 6) {
					 let temp = 'I';
					 for (var a = 1; a < roman[i]; a++) {
						temp = temp + 'I';
					 }
					 if (roman[i]>0){
						 newRoman.push(temp);
					 } else {
					 	 newRoman.splice(1,0,'I');
					 }

				 }
		}
	}
	let res = newRoman.join('');
	return res;

}

console.log(convertToRoman(4));
console.log(convertToRoman(26));
console.log(convertToRoman(24));
console.log(convertToRoman(9));
