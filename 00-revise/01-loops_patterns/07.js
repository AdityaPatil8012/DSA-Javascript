// write a fizzBuzz code 

/**
 * if i divisible by 3 and 5 => fizzBuzz 
 * if i divisible by 3 => fizz 
 * if i divisible by 5 => buzz
 */

function fizzBuzz(num) {
  for(let i = 1; i<= num; i++){
    
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }else if(i%3===0){
      console.log("Fizz");
    }else if(i%5===0){
      console.log("Buzz");
    }else{
      console.log(i);
      
    }

    // console.log(i);
    
  }  
}

fizzBuzz(10);
