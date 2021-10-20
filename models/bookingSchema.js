const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    bloodgrp: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }

})
const Booking = mongoose.model('BOOKING', bookingSchema);
module.exports = Booking;