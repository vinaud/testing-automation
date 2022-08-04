***Settings***
Resource            base.robot
Test Setup          Nova Sessão
Test Teardown       Encerra Sessão


***Test Cases***
Login com sucesso
    Go To           ${url}/login
    Input Text      css:input[name=nickname]        papitorocks
    Input Text      css:input[name=password]        pwd123
    Click Element   xpath://button[text()='Login']

    Page Should Contain     Olá Papito, bem-vindo ao Orkut