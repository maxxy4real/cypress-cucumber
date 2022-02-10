export class Searchpage {

    searchWord = '#search_query_top';
    searchIcon = '#searchbox > .btn';
    searchResult = '.page-heading';

    enterSearchWord (searchword) {
        cy.get(this.searchWord).type(searchword)
    }

    clicksearchIcon (){
        cy.get(this.searchIcon).click()
    }

    verifysearchResult (){
        cy.get(this.searchResult).should('be.visible')
    }
}

export const search = new Searchpage();