import logins from "../../pageobjects/shop.login.js";
import home from "../../pageobjects/shop.home.js";

describe('E2E scenario to add product', ()=>{
    it('Add product to the cart', async()=>{
        await browser.maximizeWindow();
        await browser.url("https://www.shoppersstack.com/");
        await expect(browser).toHaveUrl("https://www.shoppersstack.com/")
        let loginbutton = await logins.loginButton
        await loginbutton.waitForDisplayed({timeout : 50000});
        await loginbutton.click();           
        await expect(browser).toHaveUrl("https://www.shoppersstack.com/user-signin")
        await logins.loginwithcred();
        let blushProduct = await home.blushAddToCart;
        await home.blushAddToCart.scrollIntoView({ block: 'center', inline: 'nearest' });
        await expect(blushProduct).toBeDisplayed()
        await blushProduct.click()
        await browser.pause(5000)
    })
})