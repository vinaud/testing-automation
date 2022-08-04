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


Senha inválida
    [tags]          login_error

    Go To           ${url}/login
    Input Text      css:input[name=nickname]        papitorocks
    Input Text      css:input[name=password]        123456
    Click Element   xpath://button[text()='Login']

    ${message}=             Get WebELement      id:flash
    Should Contain          ${message.text}     Oops! nickname e/ou senha incorretos :(

Usuário não existe
    [tags]          login_error

    Go To           ${url}/login
    Input Text      css:input[name=nickname]        ironman
    Input Text      css:input[name=password]        pwd123
    Click Element   xpath://button[text()='Login']

    ${message}=             Get WebELement      id:flash
    Should Contain          ${message.text}     Oops! nickname e/ou senha incorretos :(