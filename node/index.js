const express = require('express')
const faker = require('faker')
const app = express()
const port = process.env.APP_PORT || 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'lascado',
  database: 'nodedb',
}
// accessa o banco de dados
const mysql = require('mysql')

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  const name = faker.name.findName()
// insere um registro com nome fake
  connection.query(`INSERT INTO people (nome) VALUES ('${name}')`)
// faz um select e mostra no html.
  connection.query(`SELECT nome FROM people`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!results.length ? results.map(el => `<li>${el.nome}</li>`).join('') : ''}
      </ol>
    `)
  })
})

app.listen(port, () => {
  console.log('Rodando na porta:', port);
})
