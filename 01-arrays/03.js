// let's now solve some questions

// check if the elements exits in an given array or not;

const numbers = [1, 2, 3, 4];

// numbers.forEach((element, index, array) => {
//   console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
// });

function fn(array, check) {
  for(let element of array){
    if(element===check){
      return true; 
    }
  }
  return false
  
}

// here we used return statement because when code reaches to return statement the code stop executing and returns immediately;

console.log(fn(["Aditya", "kunal", "Harsh"], "Jayraj"));

