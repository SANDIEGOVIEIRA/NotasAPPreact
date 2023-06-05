# NotasAPPreact


## Iniciar Aplicação:

```s
cd NotasAPP //nome do arquivo principal
npm install // instalar as dependências
```
- Será preciso abrir 2 terminais ambos já no arquivo principal
```s
npm run json-server // de preferência inicia primeiro o servidor
npm start // iniciar React
```
## Exceções adicionadas para adicionar nota
- Nota em branco: Não é permitido adicionar uma nota em branco. Se o usuário tentar adicionar uma nota sem texto, será exibida uma mensagem de erro indicando que a nota não pode estar em branco.

- Caractere "-" na nota: Não é permitido que a nota contenha o caractere "-". Se o usuário tentar adicionar uma nota com esse caractere, será exibida uma mensagem de erro indicando que a nota não pode conter o caractere "-".

- Mais de um caractere na nota: Não é permitido adicionar uma nota com mais de um caractere. Se o usuário tentar adicionar uma nota com mais de um caractere, será exibida uma mensagem de erro indicando que a nota deve conter apenas um caractere.

## Funcionalidades
- Adicionar uma nova anotação: Digite o texto da anotação no campo "Nova Nota" e clique no botão "Adicionar".

- Filtrar por importância: Clique nos botões "Todos" ou "Importantes" para filtrar as anotações exibidas.

- Marcar uma anotação como importante: Ao visualizar a lista de anotações, clique no ícone de estrela ao lado de uma anotação para alternar a importância.

Estilizado em UI react:
![image](https://github.com/SANDIEGOVIEIRA/NotasAPPreact/assets/38019660/7d446151-4fc9-4a13-9ee6-9dfb52289748)

Filta por importantes:
![image](https://github.com/SANDIEGOVIEIRA/NotasAPPreact/assets/38019660/d4aa492e-df60-4fbe-80ea-177ad9aed2cc)


Exibe todos:

![image](https://github.com/SANDIEGOVIEIRA/NotasAPPreact/assets/38019660/40008514-a82f-4d04-9976-127fed6017ac)


Mensagem de adicionado com sucesso (desaparece após 2 seg):

![image](https://github.com/SANDIEGOVIEIRA/NotasAPPreact/assets/38019660/e5c11e8c-9cff-4acd-8659-60e9c09b8d57)


Mensagem de exceção (erro desaparece após 2 seg):

![image](https://github.com/SANDIEGOVIEIRA/NotasAPPreact/assets/38019660/8ab4e2be-76fd-4afd-88d6-3aba72c90f55)
![image](https://github.com/SANDIEGOVIEIRA/NotasAPPreact/assets/38019660/4c3cbbff-c93b-4641-b1dc-74711432e976)
![image](https://github.com/SANDIEGOVIEIRA/NotasAPPreact/assets/38019660/df9cca84-d7bf-4cca-b288-7bdc07ee41d1)


Server Json em execução:

![image](https://github.com/SANDIEGOVIEIRA/NotasAPPreact/assets/38019660/6d52b0bc-a69b-4f25-89e8-18150e14ad00)
