/**
 * In recursion their are two conditions
 * 1. Base condition: which defines when the code will stop.
 * 2. Recursive case: where the function calls itself and solves the problems.
 */


// calculating the factorial 

function factorial(n) {
  // base condition: 
  if(n<=1){
    return 1;
  }

  // recursive case: 
  return n * factorial(n-1);
}


console.log(factorial(5));


// Fibonacci sequence;

function Fibonacci(n) {
  // base case: 
  if(n <= 1){
    return n;
  }

  // recursive case: 
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(6));
