// Number patterns:

// let pattern = ""; // output: none;

// console.log(pattern);

// pattern = pattern + 1; // output: 1;
// console.log(pattern);

// pattern = pattern + 2; // output: 12
// console.log(pattern);

// print the triangle pattern with numbers;

// this will run the outer loop

function triangleNumberPattern1(rows) {
  let col = ""; // In this the no. from the inner loop will be added;
  for (let i = 1; i <= rows; i++) {
    for (let num = 1; num <= i; num++) {
      col = col + num;
    }

    col = col + "\n";
  }
  console.log(col);
}

// triangleNumberPattern1(6);

function triangleNumberPattern2(rows) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    for (let num = 1; num <= i; num++) {
      pattern = pattern + i;
    }

    pattern = pattern + "\n";
  }
  console.log(pattern);
}

// triangleNumberPattern2(6)
// triangleNumberPattern2(5)

function triangleNumberPattern3(rows) {
  let variable = 1;
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    for (let num = 1; num <= i; num++) {
      pattern = pattern + variable + " ";
      variable++;
    }

    pattern = pattern + "\n";
  }
  console.log(pattern);
}

// triangleNumberPattern3(6)

// now let's start with number pyramid pattern-1;

// this is kinda difficult for right now and will come to this some time later;

// square star pattern 1;

function starPattern1(number) {
  let pattern = "";
  for (let n = 1; n <= number; n++) {
    for (let star = 1; star <= number; star++) {
      pattern = pattern + "*";
    }
    pattern = pattern + "\n";
  }
  console.log(pattern);
}

starPattern1(6);
