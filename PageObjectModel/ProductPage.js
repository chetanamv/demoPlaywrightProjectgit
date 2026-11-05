class ProductPage{
    constructor(page){
        this.productPageTitle=page.locator("//li[@class='active']")
        this.viewProductButton=page.locator("//p[text()='Sleeveless Unicorn Patch Gown - Pink']/../../../descendant::a[@href='/product_details/19']")
        this.discoverMore=page.locator("(//div[@class='goog-rentries'])[1]//span[@title]").first()
        this.closeDiscoverButton=page.locator("#hd-close-button")
        
    }
}
export default ProductPage