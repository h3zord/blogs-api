<h1 align="center">Boas-vindas ao repositório do Blogs API!</h1>

<h2 align="center">
  <a href="https://blogs-api.up.railway.app/doc" target="_blank">
    Swagger
  </a>
</h2>
<br/>

## Objetivo

O <strong>Blogs API</strong> é uma aplicação RESTful projetada para gerenciar o conteúdo de um blog. É possível criar, visualizar, atualizar e excluir posts, mediante autenticação para realizar as requisições.

## O que foi desenvolvido?

O <strong>Blogs API</strong> é uma aplicação de gerenciamento de blogs que foi criada com javaScript. Para rodar o código sem depender do navegador, o docker foi utilizado com dois containers, sendo um para o node.js e outro para o banco de dados mySQL.

O framework express.js foi usado para gerenciar as rotas, tratar as requisições HTTP e definir middlewares. O JWT (JSON Web Token) foi utilizado para autenticar as requisições que necessitam de um token válido, que é gerado após o login. Além disso, a biblioteca joi foi aplicada para validar os dados que são enviados através do corpo das requisições.

A organização de diretórios adotada foi o modelo MSC (Model, Service e Controller) e o ORM (Object-Relational Mapping) sequelize foi utilizado para interagir com o banco de dados, permitindo a definição de relacionamentos entre as tabelas.

Os endpoints dessa aplicação são capazes de realizar operações CRUD (Create, Read, Update e Delete) nos dados.

## Linguagens e ferramentas
- Docker
- Node.js
- Javascript
- Express.js
- JWT
- PostgreSQL
- Sequelize

## Instalação e execução com docker

### 1 - Clone o repositório:
```
git clone git@github.com:h3zord/blogs-api.git
```

### 2 - Entre no repositório:
```
cd blogs-api
```

### 3 - Inicie os containers:
```
docker compose up -d
```

<strong>O container vai executar o node na porta 3000 e o banco de dados na porta 5432.</strong>
<br/>
➜ http://localhost:3000/

<br/>

## Endpoints

### - Login
#### Método post:
- /login ➜ Realiza o login com email e senha e em seguida gera um token.

<br/>

### - User
#### Método post:
- /user ➜ Cadastra um novo usuário e em seguida gera um token.

#### Método get:
- /user ➜ Lista todos os usuários.
- /user/:id ➜ Busca um usuário pelo seu ID.

#### Método delete:
- /user/:id ➜ Deleta um usuário buscando pelo seu ID.

<br/>

### - Category
#### Método post:
- /categories ➜ Cadastra um nova categoria.

#### Método get:
- /categories ➜ Lista todas as categorias.

<br/>

### - Post
#### Método post:
- /post ➜ Cadastra um novo post.

#### Método get:
- /post ➜ Lista todos os posts.
- /post/search ➜ Busca todos os posts filtradas pela query.
- /post/:id ➜ Busca um post pelo seu ID.

#### Método put:
- /post:id ➜ Atualiza um post buscando pelo seu ID.

#### Método delete:
- /post:id ➜ Deleta um post pelo seu ID.
