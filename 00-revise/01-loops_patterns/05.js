// check if the number is palindrome;

// for this we have to get the last digit number first;
// to get the last digit use this code => (number%10) 
// After that multipy reverse number by 10 and add the last digit;  
// Then remove the last digit from the number by dividing by 10 and use floor value;

// let's see how to code this;

let palindrome = function(num) {
  let copyOfNum = num;
  let reverseNum = 0;

  while (copyOfNum>0) {

    // first get the last digit first and store it 
    let lastDigit = copyOfNum%10;
    
    // now, store that last digit;
    reverseNum = reverseNum * 10 + lastDigit;

    // let's get rid of the lastdigit;
    copyOfNum = Math.floor(copyOfNum/10);
    
  }

  if(num===reverseNum){
    return `Given number ${num} is a palindrome`
  }else{
    return `Given number ${num} is not a palindrome`
  }
  
}



console.log(palindrome(1224))