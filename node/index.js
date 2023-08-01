const express = require('express')
const faker = require('faker')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'lascado',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req,res) => {
    const name = faker.name.findName()
    const sql = `INSERT INTO people(name) values('${name}')`
    connection.query(sql)
    connection.query(`SELECT name FROM people`, (error, results, fields) => {
        res.send(`
          <h1>Full Cycle Rocks!</h1>
          <ol>
            ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
          </ol>
        `)
      })
    })
    connection.end
app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
