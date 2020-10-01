// Exercise 5
//
// Part 1 - Write
// ---------------
// Write a function accepts an indeterminate amount of numbers as arguments and returns the sum of the squares of all the numbers.
//
// - If any element is not a number, skip it.
// - If no arguments are passed, return `undefined`

const addNumbers = (...nums) => {
  // Insert missing solution please
  //check input
  if(nums.length===0){
    return undefined;
  }
  //loop
  let s = 0;
  for(let n=0; n<nums.length; n++){
    if(typeof(nums[n])==="number"){
      s += nums[n]**2;
    }
  }
  return s;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = addNumbers;
