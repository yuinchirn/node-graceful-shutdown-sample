const express = require('express');

const SLEEP_MSEC = 30 * 1000;
const app = express();

app.get('/healthcheck', (req, res) => {
  res.send('OK');
});

app.get('/sleep', (req, res) => {
  setTimeout(() => res.send('OK'), SLEEP_MSEC);
});

const server = app.listen(80, () => console.log('Example app listening on port 80!'));

//process.on('SIGTERM', () => {
//  console.log('SIGTERM RECEVIED.')	
//});

