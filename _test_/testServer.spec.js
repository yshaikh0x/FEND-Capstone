const apiKeys = require("../src/server/apiKeys");


//test function
test("Check geonames api key is included", () => {
  expect(apiKeys('geonamesApi')).not.toBe('');
});