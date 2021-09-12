const mongoose = require('mongoose')

const skiLengthProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    skiLengthRange: {
        type: Object,
        required: true,
        min: { type: String },
        max: { type: String }
      },
    skiStyle: {
        type: String,
        required: true,
    }
      
})

module.exports = mongoose.model('SkiLengthProfile', skiLengthProfileSchema)