***Settings***
Resource            base.robot
Test Setup          Nova Sessão
Test Teardown       Encerra Sessão

****Variables***
${check_thor}        name:thor
${check_iron}        css:input[name=ironman]
${check_panther}     xpath://*[@class='items']/div/label/input[@name='blackpanther']

***Test Cases***
Marcando opção
    Go To                           ${url}/checkboxes
    Select Checkbox                 ${check_thor}
    Checkbox Should Be Selected     ${check_thor}

Marcando opção com CSS selector
    Go To                           ${url}/checkboxes
    Select Checkbox                 ${check_iron}
    Checkbox Should Be Selected     ${check_iron}

Marcando opção com Xpath
    Go To                           ${url}/checkboxes
    Select Checkbox                 ${check_panther}
    Checkbox Should Be Selected     ${check_panther}
