const express = require('express'); // é um pacote, não precisa do ./
const cors = require('cors');
const routes = require('./routes'); // É um arquivo, precisa do ./
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, ()=>{
    console.log("Servidor iniciado na porta 3333: http://localhost:3333");
});