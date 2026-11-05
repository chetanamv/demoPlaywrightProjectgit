class PaymentPage{
    constructor(page){
        this.nameOnCard=page.locator("//input[@name='name_on_card']")
        this.cardNumber=page.locator("//input[@name='card_number']")
        this.cvc=page.getByPlaceholder("ex. 311")
        this.expiry=page.getByPlaceholder("MM")
        this.year=page.getByPlaceholder("YYYY")
        this.confirmOrderButton=page.getByText("Pay and Confirm Order")
      
    }
}
export default  PaymentPage
