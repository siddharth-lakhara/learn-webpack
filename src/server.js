const path = require('path');
const express  = require('express');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/hello-world', (req, res) => {
  const pathToHtml = path.resolve(__dirname, '../dist/hello-world.html');
  res.sendFile(pathToHtml);
});

app.get('/strawberry', (req, res) => {
  const pathToHtml = path.resolve(__dirname, '../dist/strawberry.html');
  res.sendFile(pathToHtml);
});

app.listen(3000, () => {
  console.log('App started');
})
