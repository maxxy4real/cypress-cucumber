export class Login_Page {
    emailAddress = '#identifierId';
    nextBtn = '.VfPpkd-vQzf8d';
    password = '.whsOnd zHQkBf';
    nextPwdBtn = '.VfPpkd-RLmnJb'



    clickNextBtn (){
        cy.get(this.nextBtn).click()
    }

    enterEmail (){
        cy.get(this.emailAddress).type('demoenra73@gmail.com')
    }

    enterPassword(){
        cy.get(this.password).type('Today012')
    }

    clickNextPwdBtn(){
        cy.get(this.nextPwdBtn).click()
    }

}

export const login = new Login_Page();