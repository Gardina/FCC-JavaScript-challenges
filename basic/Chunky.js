function chunkArrayInGroups(arr, size) {
	let chunk = [];
	const numbOfChunks = Math.ceil(arr.length/size);
	for ( let i = 0; i < numbOfChunks; i++) {
		let newArr = arr.slice(0, size);
		chunk.push(newArr);
		arr = arr.slice(size);
	}
	return chunk;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
// another way

var temp = [];
var result = [];

for (var a in arr) {
  if (a % size !== size - 1)
    temp.push(arr[a]);
  else {
    temp.push(arr[a]);
    result.push(temp);
    temp = [];
  }
}

if (temp.length !== 0)
  result.push(temp);
 return result;
}                                                                                   
