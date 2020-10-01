// We import (require) the function that we want to test.
const insert = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Bob", isAvailable: false },
    { name: "Josie", isAvailable: false },
  ]);
  // add more tests here...
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], {})
  ).toStrictEqual([
    { name: "Bob"},
    { name: "Josie"}
  ]);
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], "RANDOM")
  ).toStrictEqual([
    { name: "Bob" },
    { name: "Josie",}
  ]);
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], null)
  ).toStrictEqual([
    { name: "Bob" },
    { name: "Josie",}
  ]);

});

// More info on jest expect: https://jestjs.io/docs/en/expect
