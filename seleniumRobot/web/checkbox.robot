***Settings***
Library     SeleniumLibrary

****Variables***

${url}               https://training-wheels-qaninja.herokuapp.com
${check_thor}        name:thor
${check_iron}        css:input[name=ironman]
${check_panther}     xpath://*[@class='items']/div/label/input[@name='blackpanther']

***Test Cases***
Marcando opção
    Open Browser                    ${url}       chrome
    Go To                           ${url}/checkboxes
    Select Checkbox                 ${check_thor}
    Checkbox Should Be Selected     ${check_thor}

    Close Browser

Marcando opção com CSS selector
    Open Browser                    ${url}       chrome
    Go To                           ${url}/checkboxes
    Select Checkbox                 ${check_iron}
    Checkbox Should Be Selected     ${check_iron}

    Close Browser

Marcando opção com Xpath
    Open Browser                    ${url}       chrome
    Go To                           ${url}/checkboxes
    Select Checkbox                 ${check_panther}
    Checkbox Should Be Selected     ${check_panther}

    Close Browser