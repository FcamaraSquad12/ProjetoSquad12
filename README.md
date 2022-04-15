# ROBSON - SQUAD 12 :rocket: :rocket:
<ol>
    <li><a href="#sobre">Sobre</a></li>
        <li> <a href="#especificacoes">Especificações</a></li>
        <li> <a href="#comorodaroprojeto">Como Rodar o Projeto?</a> </li>
        <li> <a href="#resultados"> Resultados de Desenvolvimento</a> </li>
        <li> <a href="#features">Features</a> </li>
        <li> <a href="#conteudoxterno">Conteúdo externo</a></li>
        <li> <a href="#nossaequipe">Nossa Equipe</a></li>
    <li><a href="#licenca">Licença</a></li>
</ol>

<h2 id="sobre">Sobre</h2> 

O ROBSON - <b>R</b>ede <b>O</b>timizada de <b>B</b>usca e <b>S</b>olução "<b>O</b>range <b>N</b>etworking" - foi um projeto desenvolvido pelo Squad 12 para o Hackathon do Programa de Formação da [FCamara](https://digital.fcamara.com.br/programadeformacao) season 3. O objetivo desse projeto foi a construção de uma uma plataforma onde você encontra pessoas da tecnologia com conhecimentos diversos para tirar suas dúvidas sobre a área ou te orientar no aprendizado de novas habilidades. Na <b>ROBSON</b>, pessoas com diferentes níveis de experiência poderão se encontrar para trocar experiências, sanar dúvidas e criar networking, sempre priorizando o aprendizado. Sem mais dor de cabeça para encontrar ajuda, com o registro das habilidades dos colaboradores de forma fácil, intuitiva e veloz junto com nosso sistema de filtragem por skills os #SangueLaranja terão na plataforma da ROBSON a solução ideal para conexão das pessoas com foco no aprendizado.

<h2 id="especificacoes">Especificações</h2> 

<b>--></b> No backend utilizamos: 
    <ul>
    <li>cors: v.2.8.5</li>
    <li>dotenv: v.16.0.0</li>
    <li>express: v.4.17.1</li>
    <li>mongoose: v.6.0.7</li>
    <li>nodemon: v.2.0.13</li>
    <li>MongoDB</li>
    </ul>
 <b>--></b> No frontend utilizamos: 
      <ul>
    <li> axios: v.0.26.1</li>
    <li> bootstrap: v.4.6.1</li>
    <li> react: v.16.12.0</li>
    <li> react-router-dom: v.6.3.0</li>
    </ul>
    
 <b>--></b> Você pode verificar todas as dependências utilizadas no projeto no arquivo Package.json tanto na pasta de backend quanto na pasta de frontend. 
    
 
<h2 id="comorodaroprojeto">Como rodar o projeto?</h2>

<b>Você precisará:</b>
<ul>
    <li>Node JS - versão 16.13.1 (obrigatório)</li>
    <li>Visual Studio Code (recomendado)</li>
    <li>Git bash </li>
    <li>Windowns 10 ou superior</li>
</ul>

``` bash
#Clone este repositório no terminal:
$ git clone https://github.com/FcamaraSquad12/ProjetoSquad12.git
``` 
*OBS: Para que a aplicação funcione como esperado, você deve deixar o frontend e o backend rodando simultaneamente (abra dois terminais):*

``` bash

#Com o primeiro terminal, abra a pasta backend e execute o comando:
$ npm install
ou
$ yarn install

#Em seguida inicie a aplicação através do comando abaixo:
$ npm start
ou
$ yarn start

#A aplicação (backend) será aberta na porta:3001 - acesse http://localhost:3001. 
```
Agora que o backend está ativo, é necessário repetir o processo para o frontend: 

```bash
#No segundo terminal, abra a pasta frontend e execute o comando:
$ npm install
ou
$ yarn install

#Em seguida deixeinicie a aplicação através do comando abaixo:
$ npm start
ou
$ yarn start

#A aplicação(frontend) será aberta na porta:3000 - acesse http://localhost:3000. 
```

Agora que tanto o backend quanto o frontend estão rodando, você precisará acessar o sistema. Para isso, você pode se cadastrar como #SangueLaranja na tela de login -> cadastre-se (lembre de anotar seu e-mail e senha cadastrado, no momento não temos um sistema de recuperação de senha ativo). 

Caso não queira ou tenha alguma dificuldade em acessar o sistema, você poderá usar um usuário convidado:

``` bash

email: convidado@fcamara.com.br
senha: 123456

```

<h2 id="resultados">Resultados de Desenvolvimento</h2>

* Implementação da interface com HTML, CSS, Bootstrap e React;
* Sistema de login (autenticação com o banco de dados na nuvem);
* Sistema de cadastro de colaboradores conectado ao banco de dados na nuvem;
* Registro das habilidades dos colaboradores de forma fácil;
* Tela de home com os cards de todos os colaboradores cadastrados;
* Filtragem dos #SangueLaranja (cards) por skills, nome ou cargo. 
* Tela de visualizar o perfil de outro #SangueLaranja com as opções de contato, agendamento de mentoria (plataforma Calendly), LinkedIn, Portifólio. <b>VAMO CONECTAR!</b>
* Tela de perfil para editar os dados do usuário com comunicação com o banco de dados na nuvem;
* Tela de ambientes de estudos coletivos (Crowndlearning) - No momento as salas são no discord, imaginamos o desenvolvimento da funcionalidade dentro da própria plataforma no futuro.
