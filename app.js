const express = require('express');
const app = express();
const port = 3000;

// cria um função
//Rota principal

app.get('/', (req, res) => {
    res.send('Bem-vindo ao meu site! ');
});

//Execultando servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});