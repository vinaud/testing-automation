const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");

async function example(){


    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("http://lambdatest.github.io/sample-todo-app");

    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

    //retrieves the last element content of a list
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
        return value;
    });

    assert.strictEqual(todoText, "Learn Selenium");

    await driver.quit();
}

example();