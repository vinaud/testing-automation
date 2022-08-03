***Settings***
Resource            base.robot
Test Setup          Nova Sessão
Test Teardown       Encerra Sessão

***Test Cases***
Verifica o valor ao informar a linha
    Go To                              ${url}/tables
    Table Row Should Contain           id:series    1   2021

Descobre a linha pelo texto chave e valida os demais valores
    Go To                              ${url}/tables
    ${target}=                         Get WebElement                     xpath:.//tr[contains(., 'Loki')]
    Should Contain                     ${target.text}                     2021
    Should Contain                     ${target.text}                     Disney+