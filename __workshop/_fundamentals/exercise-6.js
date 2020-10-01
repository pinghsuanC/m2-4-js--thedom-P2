// Exercise 6
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string as an argument and returns true if
// the string is a palindrome and false otherwise.
//
// - If the argument received is not a string, return undefined.
//
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function isPalindrome(theString) {
  // Your code here
  //type checking
  if(typeof(theString)!=="string"){
    return undefined;
  }
  let len = theString.length;   //the total length
    // if odd, e.g. length = 5, check until 2 is enough
    // if even e.g. length = 6, check until 3
    // n from start to end, m from end to start
  if(len===0){
    return true;     // empty string is palindrome, i guess...
  }
  let m = len-1;
  for(let n = 0; n<Math.floor(len/2); n++){
    
    if(theString[n]!==theString[m]){
      return false;
    }
    m--
  }
  return true;
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = isPalindrome;
