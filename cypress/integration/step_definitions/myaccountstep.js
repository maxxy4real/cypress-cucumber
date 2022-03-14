import {account} from "./page-object/myAccountPage";

Then(/^I verify "([^"]*)" on the detail page$/, function () {
    account.verifyAccount(demoenra)
});

Then(/^I log out$/, function () {
    account.clickLogout()
});