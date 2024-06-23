# Projeto de Frontend e Backend para Gestão de Usuários, Produtos e Serviços

### Autores: João Augusto e Rhyan
### Instituição: Faculdade SATC
### Disciplina: Frontend

## Sumário

1. [Descrição do Projeto](#descrição-do-projeto)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Configuração do Ambiente](#configuração-do-ambiente)
5. [Instruções de Uso](#instruções-de-uso)
6. [Rotas da API](#rotas-da-api)
7. [Contribuição](#contribuição)
8. [Licença](#licença)

## Descrição do Projeto

Este projeto foi desenvolvido como parte da disciplina de Frontend na Faculdade SATC. O objetivo é criar uma aplicação completa com backend e frontend que permite a gestão de usuários, produtos e serviços. O backend utiliza `json-server` para simular uma API REST, enquanto o frontend é construído com React puro utilizando Vite para o empacotamento.

## Tecnologias Utilizadas

### Backend

- Node.js
- express
- json-server

### Frontend

- React
- Vite
- CSS puro

## Estrutura do Projeto

```
/backend
|-- /node_modules
|-- /public
|   |-- /images
|-- app.js
|-- db.json
|-- package-lock.json
|-- package.json

/react-frontend
|-- /node_modules
|-- /public
|   |-- BANNER.png
|   |-- vite.svg
|-- /src
|   |-- /components
|   |   |-- Banner.jsx
|   |   |-- InnerContent.jsx
|   |   |-- Login.jsx
|   |   |-- Main.jsx
|   |   |-- ModalProduct.jsx
|   |   |-- ModalService.jsx
|   |   |-- Navbar.jsx
|   |   |-- Product.jsx
|   |   |-- ProductForm.jsx
|   |   |-- ProductList.jsx
|   |   |-- ProfileDropdown.jsx
|   |   |-- ProtectedRoutes.jsx
|   |   |-- Register.jsx
|   |   |-- Service.jsx
|   |   |-- ServiceForm.jsx
|   |   |-- ServiceList.jsx
|   |   |-- Settings.jsx
|   |   |-- Welcome.jsx
|   |-- /routes
|   |   |-- root.jsx
|   |-- /styles
|   |   |-- banner.css
|   |   |-- login.css
|   |   |-- MainPage.css
|   |   |-- modal.css
|   |   |-- navbar.css
|   |   |-- products.css
|   |   |-- products-form.css
|   |   |-- products-list.css
|   |   |-- profiledropdown.css
|   |   |-- protectedroutes.css
|   |   |-- register.css
|   |   |-- services.css
|   |   |-- services-form.css
|   |   |-- services-list.css
|   |   |-- settings.css
|   |   |-- welcome.css
|   |-- /utils
|   |   |-- formatUrlImage.js
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
|   |-- Routes.jsx
|-- .gitignore
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
|-- vite.config.js
```

## Configuração do Ambiente

### Pré-requisitos

- Node.js instalado
- npm ou yarn instalado

### Passos para Configuração

1. Clone o repositório:
    ```sh
    git clone https://github.com/Joao-AugustoPF/projeto-frontend.git
    ```

2. Navegue até os diretórios do projeto:
    ```sh
    cd backend

    outro terminal - cd react-frontend

    ```

3. Instale as dependências:
    ```sh
    npm install ou yarn add
    ```

4. Inicie o backend:
    ```sh
    npm run start - Inicia o json-server e o express
    ```

5. Inicie o frontend (Vite) na porta padrão:
    ```sh
    npm run dev / yarn dev
    ```

## Instruções de Uso

### Backend

- O json-server roda na porta 3000 e oferece as seguintes rotas:
  - `/users`: Gerencia os usuários cadastrados.
  - `/products`: Gerencia os produtos cadastrados.
  - `/services`: Gerencia os serviços cadastrados.
  
- O express roda na porta 3001 e oferece a seguinte rota:
  - `/uploads`: Permite o upload de imagens, que são salvas na pasta `public/images`.

### Frontend

- O frontend está configurado para consumir as APIs do backend.
- A aplicação permite visualizar, adicionar, editar e remover usuários, produtos e serviços.

## Rotas da API

### GET /users
Retorna a lista de usuários cadastrados.

### POST /users
Adiciona um novo usuário. Exemplo de payload:
```json
{
  "name": "João",
  "email": "joao@gmail.com",
  "password": "123456",
  "role": "master"
}
```

### GET /products
Retorna a lista de produtos cadastrados.

### POST /products
Adiciona um novo produto. Exemplo de payload:
```json
{
  "name": "Produto X",
  "preco": 100,
  "estoque": 10,
  "imagePath": "/images/produto_x.jpg"
}
```

### GET /services
Retorna a lista de serviços cadastrados.

### POST /services
Adiciona um novo serviço. Exemplo de payload:
```json
{
  "name": "Serviço Y",
  "preco": 200,
  "descricao": "Descrição do Serviço Y",
  "imagePath": "/images/servico_y.jpg"
}
```

### POST /uploads
Faz o upload de uma imagem. A imagem é salva na pasta `public/images`.