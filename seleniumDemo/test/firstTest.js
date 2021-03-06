const { Builder, By, Key } = require("selenium-webdriver");
var should = require("chai").should();

//general describing labels
describe("add todo tests", function() {

    //action steps
    it("successfully adds a todo to application", async function(){

        let driver = await new Builder().forBrowser("firefox").build();

        await driver.get("http://lambdatest.github.io/sample-todo-app");

        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

        //retrieves the last element content of a list
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
             return value;
        });

        //chai assertion
        todoText.should.equal("Learn Selenium");

        await driver.quit();

    });
});


    


