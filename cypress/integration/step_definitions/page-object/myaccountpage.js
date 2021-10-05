export class Myaccountpage {

    userAccount = '.account > span';
    logout = '.logout';


    verifyAccount(myaccountName){
        cy.get(this.userAccount).should('have.text', myaccountName)
    }

    clickLogout(){
        cy.get(this.logout).click()
    }
}

export const account = new Myaccountpage()