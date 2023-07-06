const Page = require('../pageObjects/page')
class LoginPage extends Page{
    get userField(){
        return $("input[data-test='username']")
    }
    get passwordField(){
        return $("input[data-test='password']")
    }
    get loginButton(){
        return $("input[data-test='login-button']")
    }
    async open(){
        super.open('')
    }
}
module.exports = new LoginPage()