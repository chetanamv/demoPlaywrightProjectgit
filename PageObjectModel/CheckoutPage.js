class CheckouttPage{
    constructor(page){
        this.productDescription=page.locator(".cart_description")
        this.placeOrderButton=page.getByText("Place Order")
      
    }
}
export default  CheckouttPage
