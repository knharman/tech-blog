const path = require('path');
const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const session = require('express-session');
const sequelize = require('./config/connection');
require('dotenv').config()

const routes = require('./routes');

// Set up sessions
const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
};

app.use(session(sess));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on PORT ' + PORT));
});