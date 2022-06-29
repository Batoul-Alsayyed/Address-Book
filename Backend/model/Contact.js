const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    relationship_status: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    creation_date: {
        type: Date,
        required: true,
        default: Date.now
    } ,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
});
module.exports = mongoose.model('Contact', contactSchema);