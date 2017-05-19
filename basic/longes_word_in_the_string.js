function findLongestWord(str) {
  let strArr = str.split(' '); 
  let lengths = []; 
  for (let i = 0; i < strArr.length; i++) {
    lengths.push(strArr[i].length);
  }
  let max = Math.max(...lengths);
  return max; 
}

findLongestWord("The quick brown fox jumped over the lazy dog");


// another way 
function findLongestWord(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}