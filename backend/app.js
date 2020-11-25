const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require("express-session");
const rateLimiter = require("express-rate-limit");
const bodyParser = require("body-parser")


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

/////////////////////////////////////////////////


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(
    rateLimiter({
        windowMs: 10 * 60 * 1000,
        max: 200,
    })
);

app.use(
    "/auth/",
    rateLimiter({
        windowMs: 10 * 60 * 1000, // 10 minutes
        max: 10,
    })
);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/auth');
app.use('/auth', usersRouter);


app.listen(port, (error) => {
    if (error) {
        console.log("Error running the server");
    }
    console.log("Server is running on port", Number(port));
});