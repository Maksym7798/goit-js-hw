const findLongestWord = function(string){
  const stringArray = string.split(' ');
  let longestWord = [0];
  for (let i = 0; i < stringArray.length; i += 1){
    if (stringArray[i].length > longestWord.length) {
       longestWord = stringArray[i];
    }
  }
  return (longestWord);
  
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll')); 

console.log(findLongestWord('May the force be with you'));
