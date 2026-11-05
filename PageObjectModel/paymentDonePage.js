class PaymentDonePage{
    constructor(page){
        this.orderConfirmMsg=page.locator("//h2[@class='title text-center']")
        this.downloadInvoiceButton=page.locator("//a[text()='Download Invoice']")
        
       }
}
export default  PaymentDonePage