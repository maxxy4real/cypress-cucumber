import {forgotPwd} from "./page-object/forgotPasswordPage";

const {Given, Then, When} = require("cucumber");


Given(/^I click on demo enra in the sign in page$/, function () {
    forgotPwd.clickDemoEnra()

});
Given(/^I click on forgot password link$/, function () {
    forgotPwd.clickForgotPwdLink()

});
Then(/^I see account recovery page$/, function () {
    forgotPwd.verifyPageTitle()

});
Then(/^I click on text button$/, function () {
    forgotPwd.clickTextBtn()

});
Then(/^I enter the pin$/, function () {
    forgotPwd.typePin()

});
Then(/^I create a new password$/, function () {
    forgotPwd.createNewPasswd()
    forgotPwd.confirmNewPasswd()

});
Then(/^i click on save password link$/, function () {
    forgotPwd.clickSavePwdLink()

});
Then(/^I click continue to Gmail link$/, function () {
    forgotPwd.clickContinueLink()

});
Then(/^I verify my account name in my inbox$/, function () {
    forgotPwd.verifyMyAccount()

});
When(/^I click on next butto$/, function () {
    forgotPwd.clickNextBtn()

});