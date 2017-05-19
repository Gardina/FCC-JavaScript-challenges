

function convertToRoman(num) {
	const decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
	const romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  // Create a copy of num to work on and an empty string variable for the final roman number
	var numCopy = num;
	var romanized = '';

// While the decimal number is greater than 0,
	while (numCopy > 0) {
  // Loop through the indices of the decimalValue array.
		for (var index = 0; index < decimalValue.length; index++) {
    // Get the maximum decimal number less or equal then the decimal number.
			if (+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
      // Add the Roman numeral & decrease numCopy by the decimal equivalent.
				romanized += romanNumeral[index];
				numCopy -= decimalValue[index];
			}
		}
	}

	return romanized;
}

convertToRoman(36);
