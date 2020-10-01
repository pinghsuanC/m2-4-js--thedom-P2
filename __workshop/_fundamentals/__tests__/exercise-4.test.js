// We import (require) the function that we want to test.
const count = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(145);
  // add more tests here...
  expect(
    count(
      [
        { name: "Bob", amount: "Random" },    // amount is a string
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(45);

  expect(
    count(
      [
        { name: "Bob"},                       // doesn't have an amount
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(45);

  expect(
    count(
      [],
      "amount"                            // empty array
    )
  ).toBe(0);



});

// More info on jest expect: https://jestjs.io/docs/en/expect
