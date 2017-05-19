
function pairElement(str) {
	var GC = ['G'];
	var CG = ['C'];
	var AT = ['A'];
	var TA = ['T'];
	let result = [];
	DNA = str.split('');
	for (var i = 0; i < DNA.length; i++) {
		if (DNA[i] === 'C') {
			CG.push('G');
			result.push(CG);
			CG = ['C'];
		} else if (DNA[i] === 'G') {
			GC.push('C');
			result.push(GC);
			GC = ['G'];
		} else if (DNA[i] === 'A') {
			AT.push('T');
			result.push(AT);
			AT = ['A'];
		} else if (DNA[i] === 'T') {
			TA.push('A');
			result.push(TA);
			TA = ['T'];
		}
	}
	return result;
}

console.log(pairElement('GCG'));
