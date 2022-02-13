const express = require('express');
const app = express();
const routes = require('./routes');

require('dotenv').config()
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT)