const express = require('express');
const ctrl = require('./Controller/Controller');

const port = 6969;

const app = express();

app.use(express.json());

//Home Page
app.get('/api/starList', ctrl.getStars);
app.post('/api/starList', ctrl.addStars);

// //Cart Page
app.get('/api/starList', ctrl.getStars);
app.delete('/api/starList', ctrl.removeStars);
app.put('/api/starList', ctrl.changeName);

app.listen( port , () => {
    console.log('Server Running')
});