const path = require('path');
const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
require('dotenv').config()

const routes = require('./routes');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT)