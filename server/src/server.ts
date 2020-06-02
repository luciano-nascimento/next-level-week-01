import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuários');
    response.json([
        "Batman",
        "Jackson",
        "Joker"
    ]);
});

app.listen(3333);