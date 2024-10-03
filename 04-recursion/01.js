// let's learn about recursion;

/**
 * In recursion the functions calls itself to solve the same instance of the same problem;
 * 
 * Every Recursive function needs two main parts: 
 * 1) Base case: The condition under which the recursion stops;
 *               Without this, recursion will continue infinitely and cause a stack overflow.
 * 
 * 2) Recursive case: The part of the function where it calls itself with a smaller or simpler version of the problem;
 *  
 */

// find the n factorial using recursion function;

function factorial(n) {
  if(n === 0 || n === 1){
    return 1;
  }

  return n*factorial(n-1);
}

console.log(factorial(5));
console.log(factorial(4));