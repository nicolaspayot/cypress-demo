const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);

app.use(cors());
app.use(bodyParser.json());

app.set('port', 3000);

require('./api')(app);

server.listen(3000, () => {
  console.log(`TodoMVC server now running on http://127.0.0.1:3000`);
});
