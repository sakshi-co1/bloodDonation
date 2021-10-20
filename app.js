const dotenv = require("dotenv")
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieparser=require("cookie-parser");
app.use(cookieparser());

dotenv.config({ path: './config.env' });
// db  coonection file
require('./db/conn')
    // to convert json to normal
app.use(express.json());
// getting alllll the routess :-D
app.use(require('./route/auth'))

// const DB = 'mongodb+srv://sakshi:Sakshi123@cluster0.bc0nm.mongodb.net/BloodDonation?retryWrites=true&w=majority'
const PORT = process.env.PORT;


// connection file


// middelware
const middelware = (req, res, next) => {
    console.log("middleware");
    next();
}

// middelware();

app.get('/', (req, res) => {
    res.send(" hi /");
});

app.get('/about', middelware, (req, res) => {
    res.send(" about");
});
app.get('/booking', middelware, (req, res) => {
    res.send(" booking");
});

// app.get('/contact', (req, res) => {
//     res.send(" contact");
// })

// this both reg and login should be only in POST not GET
// app.get('/register', (req, res) => {
//     res.send(" register");
// })

// app.get('/login', (req, res) => {
//     res.send("login");
// })


app.listen(PORT, () => {
    console.log(`server is running at port no. ${PORT}`);
})