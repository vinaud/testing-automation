***Settings***
Resource            base.robot
Test Setup          Nova Sessão
Test Teardown       Encerra Sessão

***Test Cases***
Selecionando pelo texto e validar pelo value
    Go To                              ${url}/select
    Select From List By Label          id:avengerList                     Scott Lang
    ${selected}=                       Get Selected List Value            id:avengerList
    Should Be Equal                    ${selected}                        7

Selecionando pelo valor e validar pelo texto
    Go To                              ${url}/select
    Wait Until Element Is Visible      id:avengerList
    Select From List By Value          id:avengerList                    6
    ${selected}=                       Get Selected List Label           id:avengerList
    Should Be Equal                    ${selected}                       Loki

