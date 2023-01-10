const express = require("express");

const PORT = process.env.PORT || 3002;

const app = express();
const path = require('path');
const mysql = require('mysql2');

async function getDataFromMySQL() {
    const connection = mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'store_db'
    });
    const promise = connection.promise();
    const [rows, fields] = await promise.query('SELECT * FROM stores');
    return rows;
}

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', async (req, res) => {
    try {
      const data = await getDataFromMySQL();
      res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });