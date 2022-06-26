const router = require('express').Router();
const User = require('../model/User');
const {registerValidation, loginValidation}= require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const schema = {
//     name: Joi.string().min(6).required(),
//     email: Joi.string().min(6).required().email(),
//     password: Joi.string().min(6).required()
// }


router.post('/register', async(req, res) => {
    //validating data before adding new user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    //checking if the user is already in the database

    const emailExist = await User.findOne({ email: req.body.email });
    if(emailExist) return res.status(400).send('Email already exists');


    //Hashing the password 

    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(req.body.password, salt);

    //create  a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashed_password
    });
    try{
        user.save();
        res.send({user: user._id});
    }catch(err){
        console.log(err)
        res.status(400).send(err);
    }
});

router.post('/login', async (req,res) => {
    //validating data before adding new user 
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //checking if the email exists

    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send('Wrong email or password');

    // if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Invalid password');

    //create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
    

});


module.exports = router;