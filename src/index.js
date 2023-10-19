const express = require('express');
const grorouter  = require('./routes/groceries');
const marketrouter = require('./routes/market');
const authRoute = require('./routes/auth');
const logger = require('./module/logger');

require('./database');

const app=express();
app.use(express.json());
app.use(express.urlencoded());

const PORT = 5000

app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next();
  });

app.use('/groceries',grorouter);
app.use('/market',marketrouter);
app.use('/auth', authRoute);



app.listen(PORT,()=>{
    console.log('the port is running on 5000')
});
