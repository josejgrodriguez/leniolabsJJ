const LoginPage = require('../pageObjects/login.page')


describe('Login Test',async()=>{
    it('Correct Login',async()=>{
         await LoginPage.open('')
         
       await (await LoginPage.userField).click()
       await (await LoginPage.userField).clearValue()
       await (await LoginPage.userField).setValue('standard_user')
       await (await LoginPage.passwordField).click()
       await (await LoginPage.passwordField).clearValue()
       await (await LoginPage.passwordField).setValue('secret_sauce')
       await (await LoginPage.loginButton).click()
    })
})