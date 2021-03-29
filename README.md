# Frontend Kwadros

Site de vendas de molduras personalizadas com a foto à gosto do cliente com painel administrativo de gestão dos pedidos. 

O usuário envia as fotos que deseja ter emolduradas, seleciona o tipo da moldura desejada e efetua o pagamento. O pessoal da administração do Moments Frames consegue visualizar todos os pedidos e os status dele no painel administrativo. Além disso, eles conseguem cadastrar novos usuários para terem acesso a esse painel. Caso alguém esqueça a senha consegue recuperá-la facilmente através do email cadastrado. 

## Features

- [x] **Upload de Fotos:** Usuário consegue fazer upload de quantas fotos quiser e removê-las. Ao fazer upload ele tem um preview da foto em miniatura.
- [x] **Seleção de Molduras:** Listagem de molduras à venda.
- [x] **Pagamento:** Cartão de Crédito via Pagarme e Boleto Bancário via PagHiper.
- [ ] **Painel Administrativo** Autenticação e Recuperação de Senha desse Painel; Listagem de Pedidos (Detalhes exibindo as Fotos que Foram enviadas); Crud de Usuários;

## Tecnologias Utilizadas

- ReactJS
- MDB Bootstrap
- Styled Components
- Redux
- Redux Saga
- Hooks
- Consumo de API's Rest 
- Axios
- Variáveis de Ambiente
- Dropzone (upload de imagens)
- Tokenização de Cartão via Pagarme

## Guia Rápido de Instalação

Antes de qualquer coisa, você precisa ter o backend baixado e rodando na sua máquina. Confira o passo a passo [clicando aqui](https://github.com/raissaqueiroz/kwadros-api).

Além disso, você irá precisar de uma conta na pagarme pra poder usar um dos métodos de compra. Acesso o site deles [clicando aqui](https://pagar.me/).

Abra o seu terminal e rode os seguintes comandos:   

- `git clone https://github.com/raissaqueiroz/kwadros-webapp.git` 
- `cd kwadros-webapp` 

Dentro da pasta `kwadros-webapp` abra o arquivo `.env` cole a chave de encriptação da pagarme que você gerou na etapa anterior. Ficará assim: 

```
REACT_APP_API=http://localhost:3333
REACT_APP_PAGARME_ENCRYPTION_KEY=SUA_CHAVE_AQUI
```

Ainda no seu terminal, rode os comandos abaixo:

- `yarn` 
- `yarn build` 
- `yarn start` or `yarn dev`  

Prontinho! Para visualizar o projeto basta acessa o link `http://localhost:3000` no navegador de sua preferência.
