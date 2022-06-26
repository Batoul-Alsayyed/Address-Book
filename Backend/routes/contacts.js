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



//Getting one contact 
router.get('/:id', getContact, (req,res) => {
    res.json(res.contact);
    
});

//Creating one 
router.post('/', async(req,res) => {
    const contact = new Contact({
        full_name: req.body.full_name,
        phone_number: req.body.phone_number,
        relationship_status: req.body.relationship_status,
        email: req.body.email,
        longitude: req.body.longitude,
        latitude: req.body.latitude
    });


    try{
        const newContact = await contact.save();
        res.status(201).json(newContact);
    }catch(error){
        //error 400 indicates if the user entered wrong data
        res.status(400).json({ message: error.message });
    }

})

async function getContact(req,res, next) {
    let contact
    try{
        contact = await Contact.findById(req.params.id);
        if(contact == null){
            return res.status(404).json({ message: 'Cannot find contact'});
        }
    }catch(error){
        res.status(500).json({message: error.message})
    }
    res.contact = contact
    next()
}
module.exports = router