// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

import express from 'express';
import fs from 'fs';

const app = express();
const jsonData = {count: 12, message: 'hey'};

app.get('/', (req, res) => {

  //*** one way */

  // res.sendFile(__dirname + '/index.html', (err) => {
  //   if (err) res.status(500).send(err)
  // })

  
  //*** or the other  */

  // fs.readFile('./index.html', (err, html) => {
  //   if (err) throw err;
  //   res.end(html)
  // })


  //*** or even one else */

  fs.readFile('./index.html', (err, buffer) => {
    if (err) throw err;
    res.setHeader('Content-Type', 'text/html')
    res.send(buffer.toString())
  })
});

app.get('/data', (req, res) => {
  res.json(jsonData);
});


app.listen(3000, () => console.log('Server running on port 3000'));