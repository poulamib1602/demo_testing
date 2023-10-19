const mongoose = require('mongoose');
const url = require('../value.json')

mongoose
  .connect(url.MONGO_URL)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));