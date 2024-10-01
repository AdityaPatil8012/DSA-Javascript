// check if the sentence is palindrome;


let sentence = "A man, a plan, a canal: Panama";

// first let's convert the sentence to lowercase;

let lowerCaseSentence = sentence.toLowerCase();

lowerCaseSentence

// now let's remove the spaces and non - alphanumeric characters;

let removeSpaceAnd = lowerCaseSentence.trim().replace(/[^a-zA-Z0-9]/g, '')

removeSpaceAnd

// Now we have to convert the string into arrays;

let convertToArray = removeSpaceAnd.split("")

convertToArray

let reverseArray = convertToArray.reverse();

reverseArray

if(convertToArray === reverseArray){
  console.log("given string is palindrome");
  
}

// let's learn and understand more about slice() methods;

let firstName = "Aditya";

let slice = firstName.slice();
slice