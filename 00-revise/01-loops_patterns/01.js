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
  for(let i= 1; i<=rows; i++){
    for(let num = 1; num<=i; num++){
      pattern = pattern + i;
    }

    pattern = pattern + "\n"
  }
  console.log(pattern);
  
}

triangleNumberPattern2(6)
triangleNumberPattern2(5)
