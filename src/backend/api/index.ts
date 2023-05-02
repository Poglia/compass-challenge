import express from 'express';
const routes = require('./routes/routes');

const app = express(); 
const door = 3002;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(routes);

app.listen(process.env.PORT || door, () => {
    console.log('Servidor da API rodando na porta ' + door);
})
