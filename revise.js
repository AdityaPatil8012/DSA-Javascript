// write a function that returns the sum;

function add(a, b) {
  return a+b;
}

add(3,5);

// what if we don't know how many number the user is adding?
// But as of know this question is out of scope we will do this later.


// function that gives the even number 
function isEven(n) {
  if(n%2 === 0 ){
    return "The given number is even"
  }
  else{
    return "The given number is odd"
  }
}

isEven(4);
isEven(7);


// now let's practice some loops examples;

const nums = [2,4,5,6,6,7,8,9];

function isEvenForArr(arr) {
  for(const num of arr){
    if(num%2===0){
      return num
    }
  }
}

console.log(isEvenForArr(nums));














