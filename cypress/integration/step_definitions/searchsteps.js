import {search} from "./page-object/searchpage";

When(/^I click on the search icon$/, function () {
    search.clicksearchIcon()

});

Given(/^I type "([^"]*)" in the search field$/, function (searchword) {
    search.enterSearchWord(searchword)

});

Then(/^I verify "([^"]*)" displayed$/, function (searchresult) {
    search.verifysearchResult()

});