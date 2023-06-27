# desafio-docker-nginx-node-mysql
Desafio do curso FullCycle, no módulo de DevOps, trabalhando com docker.

### Descrição do desafio
> Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>
<ul>
<li>Nome1 </li>
<li>Nome2</li>
</ul>
Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.

__O retorno da aplicação node.js para o nginx deverá ser:__

```html
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```

### Requisitos
1. Toda a aplicação deve estar disponível na porta 8080 usando o comando docker-compose up --build -d .


### Para rodar :zap:
```
git clone https://github.com/romeromr10/fullcycle_nginx_node_db.git

cd fullcycle_nginx_node_db

docker-compose up --build [-d]
```
<br/>
<br/>
