// Q1. sum of all the natural numbers from 1 to n;

function sumOf(n) {
  let sum = 0;
  for(let i = 1; i<=n ; i++){
    sum = sum + i;
  }
  console.log(sum);
  
}

sumOf(5);