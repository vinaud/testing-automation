const  {When, Then, Before, After } = require("@cucumber/cucumber");
const { expect } = require("chai");

Before(function(){
    let sum = 0
})

After(function(){
    
})

When('I add {int} and {int}', function (var1, var2) {
  sum = var1 + var2;
    });

  Then('the result should be {int}', function (result) {
    expect(sum).equal(result);
    });