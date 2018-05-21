const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/Item');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sayan94:password@ds231229.mlab.com:31229/gst-data');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/formSubmit')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('app running in port 5000');
});