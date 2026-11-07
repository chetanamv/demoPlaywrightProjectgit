import { test, expect } from "@playwright/test"
import LoginPage from "../PageObjectModel/LoginPage"
import logindata from "../TestData/loginData.json"
import paymentDetails from "../TestData/paymentData.json"
import HomePage from "../PageObjectModel/HomePage"
import ProductPage from "../PageObjectModel/ProductPage"
import ProductDetailsPage from "../PageObjectModel/ProductDetailsPage"
import CartPage from "../PageObjectModel/CartPage"
import CheckouttPage from "../PageObjectModel/CheckoutPage"
import PaymentPage from "../PageObjectModel/PaymentPage"
import PaymentDonePage from "../PageObjectModel/paymentDonePage"
import fs from "fs"
import path from "node:path"

//test.describe("groupingTests",async(page)=>{

test.beforeEach(async ({ page }) => {
    let Login = new LoginPage(page)
    let home = new HomePage(page)

    //launching url
    await page.goto(`${process.env.BASE_URL}`)
    //navigating to login page
    await home.loginTab.click()
    await Login.emailTextfield.fill(`${process.env.EMAIL}`)
    await Login.passwordTextfield.fill(`${process.env.PASSWORD}`)
    await Login.loginButton.click()

})
test.afterEach(async ({ page }) => {
    // logout from application
    let home = new HomePage(page)
    await home.logoutButton.click()
})

test("home_productDetails_system", { tag: "@system" }, async ({ page }) => {
    let home = new HomePage(page)
    let Productp = new ProductPage(page)
    let productDetailsp = new ProductDetailsPage(page)
    let cartp = new CartPage(page)

    //select brand in home page

    page.on("dialog", async (dialog) => { dialog.dismiss() })
    await home.brand_allensolly.click()

    //select the product
    await Productp.viewProductButton.click()

    //assertfor the same product in product details page
    let productName = await productDetailsp.productName.textContent()
    console.log(productName);

    //click on add to cart button
    await productDetailsp.addToCartButton.click()

    //assert product added to cart msg
    let addedToCartMsg = await productDetailsp.addedMessage.textContent()
    console.log(addedToCartMsg);
    await expect(productDetailsp.addedMessage).toContainText("added to cart")

    //click on view cart link
    await productDetailsp.viewCartButton.click()

    //assert cart page for the added product
    await expect(cartp.productInCart).toContainText(productName)

    await cartp.deleteCartItem.click()

})

