export class forgotpasswpage {

    forgotPwdLink = '.lost_password > a';
    emailAddress = '#email';
    retrievePwdBtn = '.submit > .btn > span';
    confirmEmail = '.alert';
    passwordMsg = 'ol > li';
    backToLoginBtn = 'li > .btn > span';

    clickForgotPwdLink (){
        cy.get(this.forgotPwdLink).click()
    }

    enterEmail (){
        cy.get(this.emailAddress).type()
    }

    clickRetrievePwdBtn (){
        cy.get(this.retrievePwdBtn).click()
    }

    verifyConfirmEmail (){
        cy.get(this.confirmEmail).should('be.visible')
    }

    verifyPasswordMsg (messageError){
        cy.get(this.passwordMsg).should('have.text', messageError)
    }

    clickBackToLoginBtn (){
        cy.get(this.backToLoginBtn).click()
    }

}

export const forgotPwd = new forgotpasswpage()