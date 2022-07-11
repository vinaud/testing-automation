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
    
    it('Verify that the app adjusts when orientantion is switched', function(){
        console.log(driver.getOrientation());
        driver.setOrientation('LANDSCAPE');
        driver.pause(1000);
        driver.saveScreenshot('./screenshots/landscape.jpg');

        dialog.appBtn.click();
        driver.setOrientation('PORTRAIT');
        driver.back();
        driver.saveScreenshot('./screenshots/portrait.jpg');

        console.log(driver.getOrientation());
    });

    it('Verify the repeat alarm options selected', () =>{
        let isChecked, text;

        dialog.appBtn.click();
        dialog.alertDialogBtn.click();

        dialog.repeatAlarmBtn();
        text = dialog.weekdayChecbox(0).getText();
        expect(text).to.eql('Every Monday');

        isChecked = dialog.weekdayChecbox(0).getAttribute('checked');
        expect(isChecked).to.eq('false');

        dialog.weekdayChecbox().click();
        isChecked = dialog.weekdayChecbox(0).getAttribute('checked');
        expect(isChecked).to.eq('true');
    })

})