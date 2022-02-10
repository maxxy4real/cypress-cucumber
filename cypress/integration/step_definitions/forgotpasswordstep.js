import {forgotPwd} from "./page-object/forgotpasswpage";

Given(/^I click on the forgot password link$/, function () {
    forgotPwd.clickForgotPwdLink()
});

When(/^I click on Retrieve password button$/, function () {
    forgotPwd.clickRetrievePwdBtn()
})

Then(/^I see confirmation message displayed$/, function () {
    forgotPwd.verifyConfirmEmail()
});

Then(/^I see password "([^"]*)" displayed$/, function (messageError) {
    forgotPwd.verifyPasswordMsg(messageError)

});
Then(/^I click back to login$/, function () {
    forgotPwd.clickBackToLoginBtn()

});