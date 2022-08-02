***Settings***
Resource            base.robot
Test Setup          Nova Sessão
Test Teardown       Encerra Sessão

***Test Cases***
Selecionando por value
     Go To                              ${url}/radios
     Select Radio Button                movies         eternals
     Radio Button Should Be Set To      movies         eternals