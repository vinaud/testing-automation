***Settings***
Resource            base.robot
Test Setup          Nova Sessão
Test Teardown       Encerra Sessão


***Test Cases***
Login com sucesso
    Go To           ${url}/login
    Login With      papitorocks  pwd123

    Should See Logged User  Papito


Senha inválida
    [tags]          login_error

    Go To           ${url}/login
    Login With      papitorocks  123456

    Should Contain Login Alert          Oops! nickname e/ou senha incorretos :(

Usuário não existe
    [tags]          login_error

    Go To           ${url}/login
    Login With      ironman  pwd123

    Should Contain Login Alert          Oops! nickname e/ou senha incorretos :(

***Keywords***
Login With
    [Arguments]     ${username }       ${password}

    Input Text      css:input[name=nickname]        ${username}
    Input Text      css:input[name=password]        ${password}
    Click Element   xpath://button[text()='Login']

Should Contain Login Alert
    [arguments]             ${expect_message}

    ${message}=             Get WebELement      id:flash
    Should Contain          ${message.text}     ${expect_message}

Should See Logged User 
    [arguments]         ${fullname}
    
    Page Should Contain     Olá ${fullname}, bem-vindo ao Orkut