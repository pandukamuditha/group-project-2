const express = require('express');
const bodyParsa = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParsa.json());
app.use(cors({ origin:'http://localhost:4200' })); 

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/employees', employeeController);