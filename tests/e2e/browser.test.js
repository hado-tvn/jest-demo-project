const { Builder, Browser } = require('selenium-webdriver');


test("login successfully with valid credentials", async () => {

    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().setTimeouts({ implicit: 5000 });

    await driver.get('https://the-internet.herokuapp.com/login');
    await driver.findElement({ id: 'username' }).sendKeys('tomsmith');
    await driver.findElement({ id: 'password' }).sendKeys('SuperSecretPassword!');
    await driver.findElement({ css: 'button[type="submit"]' }).click();
    //wait for the success message to appear
    //verify the success message
    const successMessage = await driver.findElement({ id: 'flash' }).getText();
    expect(successMessage).toContain('You logged into a secure area!');

    await driver.quit();

}, 20000);