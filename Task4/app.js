const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { PORT } = require('./config/config');

const app = express();

const usersRoute = require('./routes/users');

//Template`s engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//parse req.body and relate public folder (static)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRoute);

//404 Not Found, similarly as react router, last route
app.use((req, res, next) => {
  res
    .status(404)
    .render('404', { pageTitle: 'Page not found', path: "" })
});

app.listen(PORT, console.log(`Server start on port ${PORT}`));