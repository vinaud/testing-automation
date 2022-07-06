const dialog = require('../pageobjects/dialog.page');

describe('Dialog -', function(){
    it('Verify that the text entry dialog username & passowrd are editable', function(){
        dialog.appBtn.click();
        dialog.alertDialogBtn.click();
        
        dialog.userNameField.clearValue();
        dialog.userNameField.addValue('TestUser');
        dialog.passwordField.clearValue();
        dialog.passwordField.addValue('pwd123');

        let text = dialog.userNameField.getText();
        console.log(text);

        dialog.dialogOkBtn.click();
    });
});