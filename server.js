const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const dotenv = require("dotenv");
const items = require('./routes/api/items');

dotenv.config();

const app = express();

//bodyparser middleware
app.use(bodyparser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
.connect(db)
.then(() => {
    console.log('MongoDB connected...');
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`server started on port ${port}`));
})
.catch(err => console.log(err));

//use routes

app.use('/api/items', items);