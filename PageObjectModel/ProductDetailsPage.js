class ProductDetailsPage{
    constructor(page){
        this.productName=page.locator("//div[@class='product-information']//h2")
        this.addToCartButton=page.locator("//button[@type='button']")
        this.addedMessage=page.locator("//p[contains(text(),'Your product has been added to cart.')]")
        this.viewCartButton=page.locator("//a[@href='/view_cart']//u")
    }
}
export default ProductDetailsPage




