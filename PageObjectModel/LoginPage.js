class LoginPage{
    constructor(page){
        this.emailTextfield=page.locator("//input[@data-qa='login-email']")
        this.passwordTextfield=page.locator("//input[@name='password']")
        this.loginButton=page.getByRole("button",{name:"Login"})
    }
}
export default LoginPage