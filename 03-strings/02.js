// Find the Index of the First Occurrence in a String;

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.


let strStr = function (haystack, needle) {
  // let's first check the needle is present in the haystack;
  if(haystack.includes(needle)){
    // here we have to return the index of first occurence;
    // here we are going to use indexOf;

    return haystack.indexOf(needle);

  } else{
    return -1;
  }
};

const haystack = "abcadityaxyz";
const needle = "aditya";

console.log(strStr(haystack, needle));




