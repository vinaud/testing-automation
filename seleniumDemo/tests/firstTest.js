const { Builder, By, Key } = require("selenium-webdriver");

async function example(){


    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("http://lambdatest.github.io/sample-todo-app");

    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

    await driver.quit();
}

example();