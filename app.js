const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const driversRouter = require('./src/routes/drivers');
const vehiclesRouter = require('./src/routes/vehicles');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));


// refatorar essa parte ( pôr em arqui separado )
const url = `mongodb://db:27017/g2l-api`;

mongoose.connect(url)
    .then(function () {
        console.log('MongoDB is connected');
    })
    .catch(function (err) {
        console.log(err);
    });

app.use('/v1/drivers', driversRouter);
app.use('/v1/vehicles', vehiclesRouter);

module.exports = app;
