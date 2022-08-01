***Settings***
Library             SeleniumLibrary

****Variables***

${url}               https://training-wheels-qaninja.herokuapp.com

***Keywords***
Nova Sessão
    Open Browser                    ${url}       chrome

Encerra Sessão
    Close Browser