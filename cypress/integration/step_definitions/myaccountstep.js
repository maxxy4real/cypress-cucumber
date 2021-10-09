import {account} from "./page-object/myaccountpage";

Then(/^I verify "([^"]*)" on the detail page$/, function (myaccountName) {
    account.verifyAccount(myaccountName)
});

Then(/^I log out$/, function () {
    account.clickLogout()
});