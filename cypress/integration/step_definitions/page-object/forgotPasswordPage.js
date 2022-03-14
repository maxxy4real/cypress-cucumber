export class forgotPasswordPage {

    forgotPwdLink = '.PrDSKc';
    nextBtn = '.VfPpkd-RLmnJb';
    textBtn = '.VfPpkd-RLmnJb';
    enterPin = '#idvPin';
    demoEnra = '.lCoei YZVTmd SmR8';
    createPwd = 'Create password';
    confirmPwd = 'ConfirmPasswd';
    accountRecoveryTitle = '#headingText';
    savePasswdLink = '.VfPpkd-vQzf8d';
    continueToGmail = '.WpHeLc VfPpkd-mRLv6';
    verifyAccount = '.gb_Au gbu';

    clickForgotPwdLink (){
        cy.get(this.forgotPwdLink).click()
    }

    clickNextBtn (){
        cy.get(this.nextBtn).click()
    }

    createNewPasswd (){
        cy.get(this.createPwd).type('Tomorrow012')
    }

    confirmNewPasswd (){
        cy.get(this.confirmPwd).type('Tomorrow012')
    }

    typePin (){
        cy.get(this.enterPin).type('G-577757')
    }

    clickDemoEnra (){
        cy.get(this.demoEnra).click()
    }

    verifyPageTitle (){
        cy.get(this.accountRecoveryTitle).should('have.text', 'Account recovery')
    }

    clickSavePwdLink (){
        cy.get(this.savePasswdLink).click()
    }

    clickContinueLink (){
        cy.get(this.continueToGmail).contains('Continue to Gmail').click()
    }

    verifyMyAccount (){
        cy.get(this.verifyAccount).should("have.value", 'demo enra')
    }

    clickTextBtn (){
        cy.get(this.textBtn).click()
    }

}

export const forgotPwd = new forgotPasswordPage()