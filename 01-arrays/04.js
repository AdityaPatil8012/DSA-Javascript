// how to find the index of an element in an given array;

function findIndexOf(array, element) {
  for(let i=0; i<array.length; i++){
    if(array[i]===element){
      return i;
    }
  }

  return "Invalid Element input"
};


let names = ["Aditya", "Madan", "kunal", "Harsh"];

console.log(findIndexOf(names, "Jayraj"));

