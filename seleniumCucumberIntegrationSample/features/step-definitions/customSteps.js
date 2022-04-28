const  {When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");

let sum = 0;

When('I add {int} and {int}', function (var1, var2) {
  sum = var1 + var2;
    });

  Then('the result should be {int}', function (result) {
    expect(sum).equal(result);
    });