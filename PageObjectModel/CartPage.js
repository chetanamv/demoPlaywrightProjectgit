class CartPage{
    constructor(page){
        this.productInCart=page.locator("//td[@class='cart_description']")
        this.deleteCartItem=page.locator("//a[@class='cart_quantity_delete']")
      
    }
}
export default CartPage