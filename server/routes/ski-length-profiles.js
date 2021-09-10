const express = require('express')
const router = express.Router()
const SkiLengthProfile = require('../models/ski-length-profile')

// Getting all
router.get('/', async (req,res) => {
    try {
        const skiLengthProfiles = await SkiLengthProfile.find()
        res.json(skiLengthProfiles)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
// Getting One
router.get('/:id', (req,res) => {
    res.send(req.params.id)
    // req.params.id
})
// Creating One
router.post('/', async (req,res) => {
    console.log(req.body, "req.body")
    const skiLengthProfile = new SkiLengthProfile({
        name: req.body.name,
        height: req.body.height,
        age: req.body.age,
        skiLengthRange: req.body.skiLengthRange
    })
    try {
        const newSkiLengthProfile = await skiLengthProfile.save()
        res.status(201).json(newSkiLengthProfile)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
// updating one
router.patch('/:id', (req,res) => {

})
// Deleting one
router.delete('/:id', async (req,res) => {
    try {
        const removedProfile = await SkiLengthProfile.deleteOne({ _id: req.params.id });
        res.status(200).json({message: "skiLengthProfile deleted"});
      } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router