const assert = require("assert");

const {
  fisherYates
} = require ("../src/shuffle.js");

it("Test - 1", function(){
  let a = [1, 2, 3, 4, 5];

  fisherYates(a);
  assert(typeof(a) === "object");
})
