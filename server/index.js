const express = require('express');
const ctrl = require('./Controller/Controller');

const port = 6969;

const app = express();

app.use(express.json());

//Home Page
app.get('/api/starList', ctrl.getStars);
app.post('/api/starList', ctrl.addStars);

// //Cart Page
app.get('/api/cartList', ctrl.getCart);
app.delete('/api/cartList/:id', ctrl.removeCart);
app.put('/api/cartList', ctrl.changeName);

app.post('/api/cartList', ctrl.addToCart);

app.listen( port , () => {
    console.log('Server Running')
});