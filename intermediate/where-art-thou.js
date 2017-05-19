function whatIsInAName(collection, source) {
	let arr = [];
	var keys = Object.keys(source);
	arr = collection.filter((item) => {
		let temp = 0;
		for (var i = 0; i < keys.length; i++) {
			if (item.hasOwnProperty(keys[i])) {
				temp +=1;
			}
		  if (temp === keys.length) {
			for (var property in item) {
				for (var sourceProp in source) {
					if (item[property] === source[sourceProp]) {
						return true;
					}
				}
			}
		}
		}
	});

	return arr;
}
console.log(whatIsInAName([
{ 'a': 1, 'b': 2 },
{ 'a': 1 },
{ 'a': 1, 'b': 2, 'c': 2 }],
{ 'a': 1, 'b': 2 }));

console.log(whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }));
