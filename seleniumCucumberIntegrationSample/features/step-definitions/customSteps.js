const  {When, Then, Before, After, Given } = require("@cucumber/cucumber");
const { expect } = require("chai");
const { By } = require("selenium-webdriver");
const by = require("selenium-webdriver/lib/by");
const{setDefaultTimeout} = require("@cucumber/cucumber");
const { initDriver } = require("../support/driveutil");

setDefaultTimeout(60 * 1000);

let sum = 0

let driver;

Before(function(){
  driver = initDriver();
})

After(function(){
    driver.quit();
})

When('I add {int} and {int}', function (var1, var2) {
  sum = var1 + var2;
    });

  Then('the result should be {int}', function (result) {
    expect(sum).equal(result);
    });


 Given('I visit Google homepage', async () => {
       await driver.get("https://google.com");
      });


      When('I search for Techverito', async () => {
       await driver.findElement(By.name('q')).sendKeys('TechVerito' + '\n');
      });


      Then('I should see the results on screen', async () => {
          let text = await driver.findElement(By.id("search")).getText();
          console.log(text);
       
      });