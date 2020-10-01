// Exercise 1
//
// Part 1 - Write
// ---------------
// Write a function accepts an array of values and returns a new array of stringified values.
//

const convertToString = (arr) => {
  // Insert missing solution please
  let t = true;
  for(let n=0; n<arr.length; n++){
    // test for object: the question haven't specified for objects
    if(typeof(arr[n])==="object"){      // null is an object... Also undefined what to do with.
      t = false;
    }
    // convert element to string
    arr[n] = arr[n]+"";
  };

  // return depending on t value
  return t ? arr:undefined;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.
/*console.log(convertToString([1, 2, 3, 4, 5]));
console.log(convertToString([1, undefined, 3, 4, 5]));
console.log(convertToString([1, 2, 3, null, 5]));
console.log(convertToString([1, 2, 3.5, 4, 5]));
console.log(convertToString([1, "", 3, 4, 5]));*/
// We need to export the function in order for our unit test to have access to it.
module.exports = convertToString;
