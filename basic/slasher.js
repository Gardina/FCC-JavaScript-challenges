
function slasher(arr, howMany) {
	for (var a in arr) {
		if (a<howMany) {
			arr = arr.splice(a, 1);
		}
	}

	return arr;
}

slasher([1, 2, 3], 2);
