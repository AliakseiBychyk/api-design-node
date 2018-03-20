// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

import express from 'express';
import fs from 'fs';

const app = express();
const jsonData = {count: 12, message: 'hey'};

app.get('/', (req, res) => {
  fs.readFile('./index.html', (err, html) => {
    if (err) throw err;
    res.end(html)
  })
});

app.get('/data', (req, res) => {
  res.json(jsonData);
});


app.listen(3000, () => console.log('Server running on port 3000'));