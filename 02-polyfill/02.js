// find the longest word length;

const words = ["apple", "banana", "cherry", "dragonfruit", "elderberry"];


const largestWord = words.reduce((maxlenght, word)=> {
  const currentLenght = word.length;
  return currentLenght > maxlenght ? currentLenght : maxlenght;
}, 0)

largestWord

// now give the word with max lenght; 

const longestWord = words.reduce((longestWord, word)=>{
  return word.length > longestWord.length ? word : longestWord;
}, "");

longestWord

