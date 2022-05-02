#language: pt
#encoding: utf-8

@Busca
Funcionalidade: Busca por produtos

#exemplo de cenário simples
Cenario: Validar busca por produto

Dado que eu visito o site "http://casasbahia.com.br"
Quando eu busco pelo produto "panela"
E eu seleciono um produto
Entao sou direcionado para a página do produto

@FluxoPrincipal
#exemplo de esquema de cenários
Esquema do Cenário: Validar buscas por produtos

Dado que eu visito o site "<nome_site>"
Quando eu busco pelo produto "<termo_busca>"
E eu seleciono um produto
Entao sou direcionado para a página do produto

Exemplos:

| nome_site                  | termo_busca       |
| http://casasbahia.com.br   | panela            |
| http://casasbahia.com.br   | panela de pressão |
| http://extra.com.br        | sapato            |


@FluxoExceção
#exemplo de esquema de cenários
Esquema do Cenário: Validar buscas por produtos inválidos

Dado que eu visito o site "<nome_site>"
Quando eu busco pelo produto "<termo_busca>"
Entao é exibida a mensagem de produto não encontrado

Exemplos:

| nome_site                  | termo_busca   |
| http://casasbahia.com.br   | grgrgerhteht  |
| http://casasbahia.com.br   | 45643$$Q      |
| http://extra.com.br        | $&Q%%$        |
