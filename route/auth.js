const jwt = require('jsonwebtoken');
const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const authenticate = require("../middleware/authenticate")
cookieParser = require("cookie-parser");
router.use(cookieParser())

require('../db/conn');
const Register = require('../models/registerSchema');
const Query = require('../models/querySchema');
const Booking = require('../models/bookingSchema')


// to show data
// router.get('/', (req, res) => {
//     res.send(" hi server");
// });

// to get data into database --> POST

//                      2 TYPES
//                       /  |
//                PROMISE    ASYNC AND AWAIT

//  THIS IS PROMISE ONE
// router.post('/register', (req, res) => {
//     const { name, email, mobile, city, state, password, cpassword } = req.body;

//     if (!name || !email || !mobile || !city || !state || !password || !cpassword) {
//         return res.status(422).json({ error: 'Plz fill require filled' })
//     }
//     // console.log(req.body)

//     Register.findOne({ email: email }).
//     then((userExist) => {
//         if (userExist) {
//             return res.status(422).json({ error: 'Email already Exist.' })
//         }

//         const reg = new Register({ name, email, mobile, city, state, password, cpassword });

//         reg.save().then(() => {
//             res.status(201).json({ message: "user registered sucessfully" })
//         }).catch((e) => {
//             console.log(e)
//         })
//     }).catch((e) => {
//         console.log(e);
//     })

// })

// HERE IS AYSNC AND AWAIT

router.post('/register', async (req, res) => {
    const { name, email, mobile, city, state, password, cpassword } = req.body;

    if (!name || !email || !mobile || !city || !state || !password || !cpassword) {
        return res.status(422).json({ error: 'Plz fill require filled' })
    }

    // console.log(req.body)
    try {
        const userExist = await Register.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: 'Email already Exist.' });
        } else if (password != cpassword) {
            return res.status(422).json({ error: 'passwords are not matching' });
        } else {
            const reg = new Register({ name, email, mobile, city, state, password, cpassword });

            await reg.save();
            res.status(201).json({ message: "user registered sucessfully" })

        }
    } catch (e) {
        console.log(e);
    }

})


// login
var userEmail ;
router.post('/login', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ error: 'Plz fill require filled' })
        }
        const userLogin = await Register.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();

            res.cookie("jwttoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })


            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credientials" })
            } else {
                userEmail = email;
                res.json({ message: "user signin successfully" })
                
            }
        } else {
            res.status(400).json({ error: "Invalid Credientials" })
        }

    } catch (err) {
        console.log(err);
    }


})
// register for donation
router.get('/appointment', authenticate, (req, res) => {
    console.log("heyy");
    res.send(req.rootUser);
})

router.post('/contact', async (req, res) => {
    const { name, email, mobile, message } = req.body;
    try {
        if (!name || !email || !mobile || !message) {
            return res.status(400).json({ error: 'Plz fill require filled' })
        }
        const reg = new Query({ name, email, mobile, message });

        await reg.save();
        res.status(201).json({ message: "user registered sucessfully" })


    } catch (err) {
        console.log(err);
    }
})

router.post('/booking', authenticate, async (req, res) => {
    const { name, email, date, bloodgrp, age } = req.body;
    try {
        if (!name || !email ||!date || !bloodgrp || !age) {
            return res.status(422).json({ error: 'Plz fill require filled' })
        }

        const reg = new Booking({ name, email, date,bloodgrp, age });
        await reg.save();
        res.status(201).json({ message: "user registered sucessfully" })


    } catch (err) {
        console.log(err);
    }

})


router.get('/booking', authenticate, async (req, res) => {
        const reg = await Booking.find({email:userEmail}).sort({date:-1});
        
            console.log(reg);
    
            res.send(reg);
            console.log(userEmail + "useemail") ;

})

router.get('/', async (req, res) => {
    const reg = await Booking.find({bloodgrp : "A+"}).count();
    
        console.log(reg);

        res.send(reg);
        // console.log(userEmail + "useemail") ;

})

router.get("/logout", (req, res) => {
    console.log("logout")
    res.clearCookie('jwttoken', { path: '/' })
    res.status(200).send("user logout")
})

//  router.get('/getdata', authenticate, (req,res)=>{
//     console.log(`Hello Contact data and home data here`)
//     res.send(req.rootUser)
//   })



module.exports = router;