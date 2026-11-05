class HomePage{
    constructor(page){
        this.loginTab= page.locator("//a[@href='/login']")
        this.hometext=page.locator("//a[text()=' Home']")
        this.categoryKids=page.locator("//a[@href='#Kids']")
        this.kidsDress=page.locator("//a[@href='/category_products/4']")
        this.brandPolo= page.locator("//a[@href='/brand_products/Polo']")
        this.brand_allensolly=page.locator("//a[@href='/brand_products/Allen Solly Junior']")
        this.productTab=page.locator("//a[@href='/products']")
        this.logoutButton=page.locator("//a[@href='/logout']")
        this.cartTab=page.locator("//a[@href='/view_cart']")
       

    }
}
export default HomePage