const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const teste1 = require("./teste1");
const teste2 = require("./teste2");
const teste3 = require("./teste3");
const teste4 = require("./teste4");
const teste5 = require("./teste5");
const authenticateJWT = require('./middleware/JwtAuthenticate');

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2)
app.delete("/users/:id", authenticateJWT, teste3)
app.put("/users/:id", authenticateJWT, teste4)
app.get("/users/access", teste5);

const port = 3000;
app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});