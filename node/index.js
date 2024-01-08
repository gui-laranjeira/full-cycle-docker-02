const express = require("express")
const app = express()
const config = {
  host: 'mysql-db',
  user: 'root',
  password: 'root',
  database: 'node-db'
}

const mysql = require ("mysql")
const connection = mysql.createConnection(config)

const query = `INSERT INTO people(name) values ('Guilherme')`
connection.query(query)
connection.end()

app.get("/", (req, res) => {
  res.send("<h1>Full Cycle</h1>")
})

app.listen(port, () => {
  console.log("Listening on port "+ port)
})