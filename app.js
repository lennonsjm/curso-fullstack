const express = require('express');
const app = express();
const port = 3000;

//Middleware
app.use(express.static('public')); // Serve arquivos estáticos da pasta 'public'


// cria um função
//Rota principal

app.get('/', (req, res) => {
    res.send('Bem-vindo ao meu site! Boa tarde! ...');
});

//Execultando servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});



//variáveis e arrays
const alimentos = [
    {id: 1, nome: "Arroz", preco: 5.99},
    {id: 2, nome: "Feijão", preco: 7.99},
    {id: 3, nome: "Macarrão", preco: 3.49},
    {id: 4, nome: "Fruta", preco: 5.99}

];


const tiposPratos =[
    {id: 1, nome: "Arroz com feijão e bife", preco: 15.99},
    {id: 2, nome: "Macarrão com molho de tomate", preco: 12.99},
    {id: 3, nome: "Salada de frutas", preco: 8.99}
]

console.log(alimentos[0]); // Acessa o primeiro elemento do array

alimentos.push({id: 5, nome: "Leite", preco: 4.99}); // Adiciona um novo elemento ao final do array

console.log(alimentos); // Imprime o array atualizado

alimentos.pop(); // Remove o último elemento do array

console.log(alimentos); // Imprime o array atualizado

console.log(alimentos.length); // Imprime o número de elementos no array

alimentos.forEach(alimento => {
    console.log(alimento.nome); // Imprime o nome de cada alimento
});

//Rota para os alimentos

//Produtos
app.get('/produtos', (req, res) => {
    res.send({ alimentos, tiposPratos }); // Retorna a lista de alimentos e tipos de pratos em formato JSON
});

//rota home
app.get('/home', (req, res) => {
   // console.log("olá",__dirname);//relaciona o caminho do diretório atual o __dirname
   res.sendFile(__dirname + '/public/index.html'); // Envia o arquivo index.html localizado na pasta public


});