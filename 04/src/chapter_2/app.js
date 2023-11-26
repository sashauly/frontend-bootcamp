const express = require('express');
const initRoutes = require('./api/routes');

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});
