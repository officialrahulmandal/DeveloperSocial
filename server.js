/**
 * Created by algoscale on 2/1/19.
 */
const express = require('express');

const app = express();

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const gravatar = require('gravatar')

const passport = require('passport')

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const users = require('./routes/api/users')
const post = require('./routes/api/post')
const profile = require('./routes/api/profile')

// Db config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());


//passport config
require('./config/passport')(passport)

app.get('/', (req, res) => res.send('Hello'));

app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',post);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));