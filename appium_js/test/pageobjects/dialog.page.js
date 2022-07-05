class Dialog{

    get appBtn() {return $("~App");}
    get userFieldName() {return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]')}
}

module.exports = new Dialog();