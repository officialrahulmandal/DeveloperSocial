/**
 * Created by algoscale on 2/1/19.
 */
const express = require('express');

const app = express();

const mongoose = require('mongoose')
// Db config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));