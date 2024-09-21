//  Valid Anagram

const s = "anagram";
const t = "nagaram";

function anagram(str1, str2) {
  // let's first check the lenght of the strings;
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the characters of both strings
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}










