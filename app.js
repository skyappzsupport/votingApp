'use strict';

import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const config = require('./app/config/config');

//----------Connect to DB
mongoose.connect(config.db.connectString);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', () => {
  console.log('Connection to MongoDB successful!');
});

//----------Set other Routers
const userRouter = require('./app/routes/user.routes')(express, app);
const pollRouter = require('./app/routes/poll.routes')(express, app);
const authRouter = require('./app/routes/auth.routes')(express, app);

app.use('/api/users', userRouter);
app.use('/api/polls', pollRouter);
app.use('/api/', authRouter);
app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


app.listen(port, function(){
  console.log(`Listening on: ${port}.`);
});
