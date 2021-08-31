const portCheck = require("../src/server/index.js");


//test function
test("Check 8000", () => {
  expect(portCheck(8000)).toBe(false);
});

test("Check 8080", () => {
  expect(portCheck(8080)).toBe(true);
});