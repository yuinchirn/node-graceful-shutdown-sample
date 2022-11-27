const express = require('express');

const SLEEP_MSEC = 30 * 1000;
const app = express();

app.get('/sleep', (req, res) => {
  setTimeout(() => res.send('OK'), SLEEP_MSEC);
});

const server = app.listen(3000, () => console.log('Example app listening on port 3000!'));

process.on('SIGTERM', () => {
  console.log('SIGTERM RECEVIED.')	
  server.close(() => {
    console.log('Process terminated.')
  })
});
