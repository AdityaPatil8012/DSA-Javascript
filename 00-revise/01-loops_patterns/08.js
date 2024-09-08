// Power of two;
// return true of n===2**x and false if not;

function powerOfTwo(n) {
  for (let x = 0; x <= 31; x++) {
    // console.log(2**x);
    if (n === 2 ** x) {
      return true;
    }
  }
  return false;
}

// for (let x = 0; x <= 31; x++) {
//   console.log(2 ** x);
// }

console.log(powerOfTwo(1));
console.log(powerOfTwo(16));
console.log(powerOfTwo(3));
