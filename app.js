const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const cors = require('cors');

const uri = "mongodb+srv://matheus:Ester221118@cluster0-p06o7.mongodb.net/ranking?retryWrites=true&w=majority";

const studentController = require('./controller/student.controller');

app.use(cors());

app.get('/', (req, res) => {
    res.status(404).send('Home');
})

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Banco de dados conectado com sucesso!');
    })
    .catch(() => {
        console.log('Erro ao conectar o banco de dados');
    });

app.get('/student/:name', studentController.findOne);
app.get('/student', studentController.findAll);

app.listen(PORT, () => console.log('Hello'));