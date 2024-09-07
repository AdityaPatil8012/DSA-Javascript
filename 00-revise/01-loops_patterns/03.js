// sum of digits of a number;

// let num = 123;

function sumOfDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return console.log(sum);
}

sumOfDigits(123);

sumOfDigits(234578);

