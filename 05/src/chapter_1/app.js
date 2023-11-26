const express = require('express');
const path = require('path');

const hbs = require('hbs');
const initRoutes = require('./api/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, 'public')));
hbs.registerPartials(`${__dirname}/views/partials`, (err) => {
  console.log(err);
});

initRoutes(app);

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}`);
});
