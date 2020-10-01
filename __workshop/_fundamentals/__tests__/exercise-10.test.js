// We import (require) the function that we want to test.
const uniqueElements = require("../exercise-10");

// Write 3 more expect functions to test the function you just wrote.
// Notice that the expect method is different.
// When verifying equality of arrays and objects, we need to use .toStrictEqual().
test("Exercise 10", () => {
  expect(uniqueElements([0, 1, 2, 3], [1, 3, 4, 5])).toStrictEqual([
    0,
    2,
    4,
    5,
  ]);
  // add more tests here...
  expect(uniqueElements([], [1, 3, 4, 5])).toStrictEqual([ 1,3,4,5 ]);
  expect(uniqueElements([2,3,4], [1, 3, 4, 5])).toStrictEqual([2,1,5]);
  expect(uniqueElements(["string", "string", "string2"], ["string2"])).toStrictEqual(["string"]);
  expect(uniqueElements([], [])).toStrictEqual([]);
  expect(uniqueElements([1, 2, "string", null], [1, 4, "string2"])).toStrictEqual([2, 'string', null, 4, 'string2' ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
