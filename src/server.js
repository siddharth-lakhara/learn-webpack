const path = require('path');
const express  = require('express');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));
app.get('/', (req, res) => {
  const pathToHtml = path.resolve(__dirname, '../dist/index.html');
  res.sendFile(pathToHtml);
});

app.listen(3000, () => {
  console.log('App started');
})
