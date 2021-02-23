'use strict';

require('dotenv').config();

const server = require('./src/server.js')
const mongoose = require('mongoose');
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  })
  .catch(e => console.error('Could not start server', e.message));