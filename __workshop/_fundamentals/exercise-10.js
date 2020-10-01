// Exercise 10
//
// Part 1 - Write
// ---------------
// Write a function accepts two arrays and returns a new array with the elements that are unique to array1
// and array2.
// An element is unique if it only appears in one of the arrays.
// It is allowed to appear multiple times in the same array.
//
// - If there are no unique elements return an empty array.
// - If the inputs are anything other than arrays, return undefined.

// For example:
// uniqueElements([0,1,2,3], [1,3,4,5]); // [0,2,4,5]
// uniqueElements([1,2,3], [3,2,1]); // []
// uniqueElements(2); // undefined, not an array

// HINTS:
//   - You'll need to do a nested iteration, to compare every item in array 1
//     to every item in array 2
//   - You will need to run your logic 2 times, flipping the order:
//     - Once to get the unique elements in the first array
//     - A second time to get the unique elements in the second array
//
// THIS IS A VERY HARD PROBLEM.
// If you struggle with it, set it aside. In a few weeks, you might find the
// solution comes more quickly :)

const uniqueElements = (arr1, arr2) => {
  // Your code here
  //check inputs
  if(!Array.isArray(arr1) || !Array.isArray(arr2)){
      return undefined;
  }
  if(arr1.length===0){
    return arr2;        // if arr1 is empty then all elements in arr2 are unique
  }
  if(arr2.length===0){
    return arr1;        // if arr2 is empty then all elements in arr1 are unique
  }

  // pre-processing: remove the identical elements
  arr1 = [...new Set(arr1)];    // tried but filter didn't work...
  arr2 = [...new Set(arr2)];
  

  // find AUB by A+B - ANB;
  // find ANB
  let dup = [];
  for(let i=0; i<arr1.length; i++){
    ele_1 = arr1[i];
    for(let j=0; j<arr2.length; j++){
      ele_2 = arr2[j];
      if(ele_1===ele_2){
        dup.push(ele_1);
      }
    }
  }
  

  let com = [...arr1, ...arr2].filter((value)=>{
    return !dup.includes(value);
  });
  return com;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.
//console.log(uniqueElements([0, 1, 2, 3, 3, 7, 7,6], [1, 3, 4, 5, 6]) );    //[0,2,4,5]
//console.log(uniqueElements([2,3,4], [1, 3, 4, 5]));
uniqueElements([1, 2, "string", null], [1, 4, "string2"])
// We need to export the function in order for our unit test to have access to it.
module.exports = uniqueElements;
