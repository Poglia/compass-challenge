import express from 'express';
const routes = require('./routes/routes');

const app = express();
const door = 3002;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(routes);

app.listen(process.env.PORT || door, () => {
    console.log('Servidor da API rodando na porta ' + door);
})
