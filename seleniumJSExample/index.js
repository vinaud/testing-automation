const { Builder, By, util, Key} = require("selenium-webdriver");

async function example() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("selenium", Key.RETURN);
}


example();