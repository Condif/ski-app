const mongoose = require('mongoose')

const skiLengthProfileSchema = new mongoose.Schema({
    name: {
        type: String,
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
      
})

module.exports = mongoose.model('SkiLengthProfile', skiLengthProfileSchema)