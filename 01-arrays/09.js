// Given an array of integers nums and an integers target,
// return the indics of the two numbers such that they add up to target;

// for this let loop it first;

const nums = [1,2,3,4,5,6];

function twoSum(nums, target) {
  let ans = []
  for(let i = 0; i<nums.length; i++){
    for(let n = i + 1; n<nums.length; n++){
      if(nums[i]+nums[n] === target){  
        ans.push(i);
        ans.push(n);
        return ans;
      }
    }
  }
  return "Ans not found";
} 

console.log(twoSum(nums, 9))




