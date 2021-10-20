const mongoose = require("mongoose")

const querySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const Query = mongoose.model('query',querySchema);
module.exports = Query;