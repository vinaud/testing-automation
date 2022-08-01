***Settings***
Library     SeleniumLibrary

****Variables***

${url}               https://training-wheels-qaninja.herokuapp.com

***Test Cases***
Marcando opção
    Open Browser                    ${url}       chrome
    Go To                           ${url}/checkboxes
    Select Checkbox                 name:thor
    Checkbox Should Be Selected     name:thor

    Close Browser

Marcando opção com CSS selector
    Open Browser                    ${url}       chrome
    Go To                           ${url}/checkboxes
    Select Checkbox                 css:input[name=ironman]
    Checkbox Should Be Selected     css:input[name=ironman]

    Close Browser

Marcando opção com Xpath
    Open Browser                    ${url}       chrome
    Go To                           ${url}/checkboxes
    Select Checkbox                 xpath://*[@class='items']/div/label/input[@name='blackpanther']
    Checkbox Should Be Selected     xpath://*[@class='items']/div/label/input[@name='blackpanther']

    Close Browser