***Settings***
Resource            base.robot
Test Setup          Nova Sessão
Test Teardown       Encerra Sessão

***Test Cases***

Should See Page Title
    Open Browser        https://training-wheels-qaninja.herokuapp.com       chrome
    Title Should Be     Training Wheels | QAninja