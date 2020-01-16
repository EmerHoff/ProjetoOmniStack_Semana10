const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://emerhoff:semana10@cluster0-imell.mongodb.net/week10?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Metodos HTTP: GET, POST, PUT, DELETE

//Tipos de Parametros:
//Query Params: req.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)


//MongoDB (Não-Relacional)

app.listen(3333);