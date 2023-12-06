const exphbs = require('express-handlebars');
const { join, resolve } = require('path');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { json, static } = express;
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express()
  .use(json())
  .use(static(resolve(__dirname, 'public')))
  .use(cors())
  .use(cookieParser())
  .use(express.urlencoded({ extended: false }));

app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', join(__dirname, 'views'));

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
const paths = ['/', '/menu', '/orders'];
paths.forEach((sitePath) => {
  app.get(sitePath, (req, res, next) => {
    if (!req.session.user) {
      return res.redirect('/signin');
    }
    next();
  });
});

app.use('/', require('./routes/main.routes'));
app.use('/orders', require('./routes/order.routes'));
app.use('/menu', require('./routes/menu.routes'));
app.use('/signin', require('./routes/signin.routes'));
app.use('/signup', require('./routes/signup.routes'));
app.use('/logout', require('./routes/logout.routes'));

app.use('/api/users', require('./routes/api/user.routes'));
app.use('/api/orders', require('./routes/api/order.routes'));
app.use('/api/waiters', require('./routes/api/waiter.routes'));
app.use('/api/menu', require('./routes/api/menuitem.routes'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
