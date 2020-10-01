// Exercise 9
// -------------
//
// Write a function that accepts a string and returns the string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after
// every 40 characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

const wrapAfter40Chars = (paragraph) => {
  // Your code here
  //check input
  if(typeof(paragraph)!=="string"){
    return undefined;
  }
  let result = "";
    paragraph.split("").forEach((char, index) => {
      // if the last letter of result is newline, and current char is space, continue, else
        if (!(char === " " && result[result.length - 1] === "\n")) {
          result += char; // append to result
          if ((index + 1) % 40 === 0) { // if index is multiple of 40, add a break
              result += "\n";
          }
        }
    });
    return result;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.
/*console.log(wrapAfter40Chars(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
));
console.log(wrapAfter40Chars(123));
console.log(wrapAfter40Chars(  "Lorem Ipsum is simply dummy text of thek printing and"));
console.log(wrapAfter40Chars( "Lorem Ipsum is simply dummy text of tkhe the painting"));*/
// We need to export the function in order for our unit test to have access to it.

/*console.log(wrapAfter40Chars(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
));*/
module.exports = wrapAfter40Chars;
