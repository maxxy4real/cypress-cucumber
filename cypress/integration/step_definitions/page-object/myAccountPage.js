export class MyAccountPage {

    userAccount = '.gb_Au gbu';
    logout = '.wBFtm';


    verifyAccount(myaccountName){
        cy.get(this.userAccount).should('have.text', myaccountName)
    }

    clickLogout(){
        cy.get(this.logout).click()
    }
}

export const account = new MyAccountPage()