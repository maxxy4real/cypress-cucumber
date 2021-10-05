export class Login_Page {
    signInLink = '.login';
    emailAddress = '#email';
    password = '#passwd';
    signInBtn = '#SubmitLogin > span';


    clickSignIn (){
        cy.get(this.signInLink).click()
    }

    enterEmail (myemail){
        cy.get(this.emailAddress).type(myemail)
    }

    enterPassword(mypassword){
        cy.get(this.password).type(mypassword)
    }

    clickSignBtn(){
        cy.get(this.signInBtn).click()
    }

}

export const login = new Login_Page();