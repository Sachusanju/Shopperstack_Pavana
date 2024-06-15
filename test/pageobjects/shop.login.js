import fs from 'fs'
class LoginPage{
    get usernametext(){
        return $("//input[@id='Email']")
    }
    get passwordtext(){
        return $("//input[@id='Password']")
    }
    get button()
    {
        return $("//button[@id='Login']")
    }
    get loginButton()
    {
        return $("//button[@id='loginBtn']")
    } 
    get homeText()
    {
        return $("//a[text()='Home']")
    }       
    
        async loginwithcred()
        {
            let cred = JSON.parse(fs.readFileSync("./test/testData/log.json"))
            //console.log("=============>",cred.username, cred.password)
            await this.usernametext.setValue(cred.username);
            let actualusername = await this.usernametext.getAttribute('value')
            await expect(actualusername).toEqual("brsachitha@gmail.com")
            await this.passwordtext.setValue(cred.password);
            let actualpassword  = await this.passwordtext.getAttribute('value');
            await expect(actualpassword).toEqual("Sanjana@1")
            await this.button.click()
            let text = await this.homeText.getText()
            await expect(text).toEqual("Home")
        } 
}
 export default new LoginPage()