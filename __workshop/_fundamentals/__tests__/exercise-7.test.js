// We import (require) the function that we want to test.
const addValues = require("../exercise-7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: true },
    { name: "liv", age: 36, isAvailable: true },
    { name: "dave", age: 43, isAvailable: true },
  ]);
  // add more tests here...
  expect(
    addValues(
      [ ],    // empty array
      { isAvailable: true }
    )
  ).toStrictEqual(undefined);

  expect(
    addValues(
      [
        "string",
        { name: "liv", age: 36 }
      ],
      { isAvailable: true }
    )
  ).toStrictEqual(undefined);
  
  
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      { isAvailable: true, notAvailable: false }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: true, notAvailable: false },
    { name: "liv", age: 36, isAvailable: true, notAvailable: false },
    { name: "dave", age: 43, isAvailable: true, notAvailable: false },
  ]);
  
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "random string"
    )
  ).toStrictEqual(undefined);

});



// More info on jest expect: https://jestjs.io/docs/en/expect
