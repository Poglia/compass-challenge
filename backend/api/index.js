const express = require('express');
const cors = require('cors');
const rotas = require('./routes/rotas')

const app = express();
const door = 3002;

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

app.use(rotas);

app.listen(process.env.PORT || door, () => {
    console.log('Servidor da API rodando na porta ' + door);
})
