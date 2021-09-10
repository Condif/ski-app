require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')
app.use(cors())
const port = process.env.PORT || 8001

app.use(express.urlencoded({ extended: false }));


const db = mongoose.connection
mongoose.connect(process.env.DATABASE_URL, {useNewUrlparser: true})
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const skiLengthProfileRouter = require('./routes/ski-length-profiles')
app.use('/ski-length-profiles', skiLengthProfileRouter)

app.listen(port, () => console.log('Server Started'))