// count the number of digits of the number


function countTheDigitsNumber(num) {

  num = Math.abs(num);
  let count = 0;

  do{
    count++;
    num = Math.floor(num/10);
  }while(num>0);

  return console.log(count);
  
}

countTheDigitsNumber(1234) // output is going to be 3;

// I am wrong because the output is 4; 
// which is right; 

// this work fine but let's see why to use do while loop;

countTheDigitsNumber(0); // here this is a special case where we use do while loop because if the number is "0" this will run atleast once and we get count 1;


