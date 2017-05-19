function titleCase(str) {
	str = str.toLowerCase();
	let arrWords = str.split(' ');
	for (var i = 0; i < arrWords.length; i++) {
		let arrLetters = arrWords[i].split('');
		let capLetter = arrLetters[0].toUpperCase();
		arrLetters[0] = capLetter;
		arrWords[i] = arrLetters.join('');
	}
	str = arrWords.join(' ');
	return str;
}

titleCase('I\'m a little tea pot');

//another way
String.prototype.replaceAt = function(index, character) {
	return this.substr(0, index) + character + this.substr(index+character.length);
};


function titleCase(str) {
	var newTitle = str.split(' ');
	var updatedTitle = [];
	for (var st in newTitle) {
		updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
	}
	return updatedTitle.join(' ');
}
