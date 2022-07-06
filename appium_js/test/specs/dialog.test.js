const dialog = require('../pageobjects/dialog.page');
const { expect } = require('chai');

describe('Dialog -', function(){
    it('Verify that the text entry dialog username & passowrd are editable', function(){
        dialog.appBtn.click();
        dialog.alertDialogBtn.click();
        
        dialog.userNameField.clearValue();
        dialog.userNameField.addValue('TestUser');
        dialog.passwordField.clearValue();
        dialog.passwordField.addValue('pwd123');

        dialog.userNameField.getText().then((text)=>{
            console.log(text);
            expect(text).equal('TestUser');
        });
        

        dialog.dialogOkBtn.click();
    });
});