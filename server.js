//Teste
const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.status(200).send({message: 'Hello word'});
})
app.get('/ola',(req, res) => {
    res.status(200).send({message: 'I\'m route ola!'});
})
app.listen(3001, () => {
    console.log('API rodando na porta 3001.');
})
