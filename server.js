var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 8080);

console.log("server ok na porta 8080");

app.get('/dados', (req, res) => {
    let dados =  [
        { titulo: 'Titulo 1', descricao: 'Descrição do cartão 1', detalhe: 'O detalhe do cartão1 vem aqui', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
        { titulo: 'Titulo 2', descricao: 'Descrição do cartão 2', detalhe: 'O detalhe do cartão2 vem aqui', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
        { titulo: 'Titulo 3', descricao: 'Descrição do cartão 3', detalhe: 'O detalhe do cartão3 vem aqui', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
        { titulo: 'Titulo 4', descricao: 'Descrição do cartão 4', detalhe: 'O detalhe do cartão4 vem aqui', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' },
        { titulo: 'Titulo 5', descricao: 'Descrição do cartão 5', detalhe: 'O detalhe do cartão5 vem aqui', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste' }
    ];
    res.send(dados);
});