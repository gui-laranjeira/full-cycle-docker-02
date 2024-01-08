const express = require("express")
const port = 4200
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
  const connection = mysql.createConnection(config)
  const query = `SELECT name FROM people`
  connection.query(query, (error, results) => {
    if (error) throw error;
    console.log(results);
    connection.end();

    let table = '<table><tr><th>Name</th></tr>';
    for(let people of results) {      
      table += `<tr><<td>${people.name}</td></tr>`;
    }
    res.send(`
      <h1>Full Cycle</h1>${table}`);
  });
});

app.listen(port, () => {
  console.log("Listening on port "+ port)
})