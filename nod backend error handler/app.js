const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/users-routes');

const app = express();

app.use('/api/users', usersRoutes); // => /api/users...

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

app.listen(5000);