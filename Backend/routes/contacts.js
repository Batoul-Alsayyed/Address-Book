const express = require('express');
const router = express.Router();
const Contact = require('../model/Contact');

//Getting all
router.get('/', async(req,res) => {
    try{
        const contacts = await Contact.find();
        res.send(contacts);
    }catch(error){
        res.status(500).json({message: error.message})
    }
});

module.exports = router