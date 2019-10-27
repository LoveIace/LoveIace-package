const assert = require("assert");

if("Test - 1", function(){
  let a = shuffleResigDelete([1,2,3,4,5]);
  assert(typeof(a) === "object");

  let a = fisherYates([1,2,3,4,5]);
  assert(typeof(a) === "object");
})
