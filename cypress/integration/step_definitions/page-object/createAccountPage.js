export class createAccountPage {

    createAccountBtn = '.VfPpkd-vQzf8d';
    forMyself = 'VfPpkd-StrnGf-rymPhb-b9t22c';
    phoneNumber = '#phoneNumberId';
    firstName = '#firstName';
    lastName = '#lastName';
    userName = '#userName';
    password = 'Passwd';
    gender = '#gender';
    choosePersonalization = '.wEIpqb nQOrEb';
    confirmBtn = '.VfPpkd-vQzf8d';
    agreeBtn = '.VfPpkd-vQzf8d';


    clickCreateAccountBtn (){
        cy.get(this.createAccountBtn).click()
    }

    clickForMyself (){
        cy.get(this.forMyself).click()
    }

    enterPhoneNumber (){
        cy.get(this.phoneNumber).type('07459519083')
    }

    enterFirstName (){
        cy.get(this.firstName).type('demo')
    }

    enterLastName (){
        cy.get(this.lastName).type('enra')
    }

    enterUserName (){
        cy.get(this.userName).type('demoenra')
    }

    enterPassword () {
        cy.get(this.password).type('Mond@y012')

    }

    selectGender (){
        cy.get(this.gender).select('male')
    }

    choosePersonalizationOptn () {
        cy.get(this.choosePersonalization).click()
    }

    clickConfirmBtn (){
        cy.get(this.confirmBtn).contains('Confirm').click()
    }

    clickAgreeBtn (){
        cy.get(this.agreeBtn).contains('I agree').click()
    }
}

export const createAcct = new createAccountPage()