## Questão 01

-O código exemplo tem a função de atualizar
determinado objeto. 

-Na linha 8 a variável "object_detail_entity" 
recebe um objeto 
criado criado pelo seneca "object_detail"

-seneca.add() recebe pattern(linha 11) 
e action(linha 12)

-a função "resolve_object" recebe como parametro
um objeto atualizado pela função 
"cmd_update_object" a qual utiliza os métodos
_.assign() e _.pick() da biblioteca
lodash importada no começo do código para 
atualizar os dados e ao final salva os dados.

-Após receber como parâmetro os dados salvos
a função "resolve_object" carrega os dados 
para a variavel "object_detail_entity"
criada no começo (linha 8) com a tratativa
de erro caso falhe o carregamento e
caso não encontre o objeto

-Ao final é retornado um objeto com 
name: valor da atualização



## Questão 2


## Como executar

Para iniciá-lo, siga os passos abaixo:

```bash
# Instalar as dependências
$ yarn

# Iniciar o projeto
$ yarn dev
```

O app estará disponível no seu browser pelo endereço http://localhost:4000.

Dados enviados em JSON 
exemplo:
```JSON
{
"name": "Fulano",
"age": 23,
"favorite_artist": "Van Gogh",
"favorite_work": "Noite Estrelada"
}

```


## Projeto 
Desenvolvido para: criar, atualizar, vizualizar, e deletar perfil de usuário.

