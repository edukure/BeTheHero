const cors = require("cors");
const express = require('express');
const routes = require("./routes");
const app = express();

app.use(cors());
//o padrão de informação recebida não é json
app.use(express.json());
app.use(routes);


app.listen(3333);
