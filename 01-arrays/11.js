// find the repeated majority elements in an array;


let majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  // Phase 1: Find a candidate for majority element
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Phase 2: Since it's guaranteed to have a majority element, we return the candidate
  return candidate;
};

