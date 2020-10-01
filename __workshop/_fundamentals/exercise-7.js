// Exercise 7
//
// Part 1 - Write
// ---------------
// Write a function that accepts an array of objects and an object as arguments
// and returns a new array with the values of original array that each include the second object.
// e.g. addValues([{name: 'chris', age: 23}, {name: 'liv', age: 36}, {name: 'dave', age: 43}], {isAvailable: true}) returns
// [
//   { name: "chris", age: 23, isAvailable: true },
//   { name: "liv", age: 36, isAvailable: true },
//   { name: "dave", age: 43, isAvailable: true },
// ]

// - If the provided key is not any of the objects, return null for that value;

const addValues = (arr, obj) => {
  // Insert missing solution please
  //checking input
  if(!Array.isArray(arr) || arr.length===0 ||typeof(obj)!=="object"){
    return undefined;
  }
  for(let n = 0; n<arr.length; n++) {

    if(typeof(arr[n])!=="object" || arr[n]==null){   // check for no-object, and null
      return undefined;
    }

    arr[n] = {...arr[n], ...obj};
  };
  return arr;
};

// Part 2 - Test
// --------------
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.
  //console.log(addValues( ["string", { name: "liv", age: 36 }], { isAvailable: true } ));


module.exports = addValues;
