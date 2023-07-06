module.exports = 
class Page{
    open(){
        return browser.url(browser.options.baseUrl)
    }
}