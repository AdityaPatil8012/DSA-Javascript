// Merge Strings Alternately;

let FirstName = "Aditya";

let lastName = "Patil";

let mergeAlternately = function (word1, word2) {
  // let's first define the final world;
  let finalWord = "";

  for(let i = 0; i<word1.length || i<word2.length; i++){

    // for first word;
    if(i<word1.length){
      finalWord += word1.charAt(i);
    }

    // for second word;
    if(i<word2.length){
      finalWord += word2.charAt(i);
    }

  }

  return finalWord;
}

console.log(mergeAlternately(FirstName, lastName));




