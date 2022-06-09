# 📚 Todoist Clone

<h1 align="center">
    <img alt="Todoist" src="assets/todoist.png" height="100px" />
    <br/>
   <a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node.js</a> | <a href="https://angular.io/docs" target="_blank" rel="noopener">Angular</a>

<p align="center">
  <img alt="Develop by" src="https://img.shields.io/badge/Develop%20by-Gabriel%20Patrola-blue?style=flat&logo=Awesome-Lists">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gabrielpatrola/todoist-clone?color=informational&style=flat&logo=GitHub-Actions">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gabrielpatrola/todoist-clone?color=important&style=flat&logo=Javascript">
  <img alt="License" src="https://img.shields.io/github/license/gabrielpatrola/todoist-clone?&style=flat&logo=Google-Sheets">
   <a href="./assets/Todoist.postman_collection.json" target="_blank" rel="noopener"><img alt="Run in Postman" src="https://run.pstmn.io/button.svg"></a>
<p>

<h3 align="center">
  <a href="#-sobre">Sobre</a>
  <span> · </span>
  <a href="#-tecnologias-utilizadas">Tecnologias utilizadas</a>
  <span> · </span>
  <a href="#-como-usar">Como usar</a>
  <span> · </span>
  <a href="#-como-contribuir">Como contribuir</a>
  <span> · </span>
  <a href="#-material-de-apoio">Material de apoio</a>
  <span> · </span>
  <a href="#-licença">Licença</a>
</h3>

## 💭 Sobre

Uma aplicação clone do `Todoist` utilizando angular no frontend e node no backend.

## 👨‍💻 Tecnologias Utilizadas

- <a href="https://angular.io/docs" target="_blank" rel="noopener">Angular</a> no frontend web;
- <a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node</a> com <a href="https://expressjs.com/" target="_blank" rel="noopener">Express</a> no backend;
- <a href="https://docs.docker.com/" target="_blank" rel="noopener">Docker</a>.

## ⁉ Como usar

### 🤔 Pré-requisitos

Para conseguir utilizar a aplicação sem nenhum problema é necessário ter:

- O **<a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node.js</a>** instalado no computador para a execução do backend
- Ter em sua máquina o **<a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>** ou **<a href="https://yarnpkg.com/" target="_blank" rel="noopener">Yarn</a>** para o gerenciamento dos pacotes da aplicação
- E não menos importante, o **<a href="https://git-scm.com/" target="_blank" rel="noopener">Git</a>** para clonar o repositório em seu computador

### 📝 Passo a passo

Primeiro clone o repositório em seu computador, por meio do terminal utilizando o comando:

1. Clonando o repositório

```sh
  # Clone o repositório
  $ git clone https://github.com/Gabrielpatrola/todoist-clone.git
  # Entre na pasta raiz da aplicação
  $ cd todoist-clone
```

2. Iniciando docker criando arquivo `.env`

Crie um arquivo chamado de '.env' copiando as informações existentes no arquivo '.env.example' e em seguida rode o seguinte comando

```sh
  # Comando para iniciar a aplicação em modo de desenvolvimento
  $ docker-compose up -d
```

3. Iniciando o Backend

```sh
  # Entre na pasta do backend
  $ cd api
  # Instale as dependências da aplicação
  $ yarn # ou npm install
  # Crie o banco de dados da aplicação
  $ npx sequelize-cli db:migrate
  # Inicie o servidor
  $ yarn dev # ou npm run dev
```

4. Iniciando o Frontend web

```sh
  # Entre na pasta da aplicação web
  $ cd web
  # Instale as dependências da aplicação
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start
```

Para acessar a aplicação basta entrar me http://localhost:4200

Fique atento para as atualizações desse projeto. Não esqueça de deixar uma estrela nesse repositório!

## 💪 Como contribuir

Basta criar um fork do projeto, realizar as modificações que achar necessário e depois fazer um Pull Request.
Toda ajuda é bem vinda, caso veja algum erro, não hesite em contribuir com o projeto!

## 📚 Material de apoio

- **<a href="./assets/Todoist.postman_collection.json" target="_blank" rel="noopener">Postman</a>** com as requisições

## 📃 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

<sup> Feito com 💙 por <a href="https://github.com/gabrielpatrola" target="_blank" rel="noopener">Gabriel Patrola</a>.
