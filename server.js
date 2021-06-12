const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const passport = require('passport')
const ques_router = require('./routes/questions')
const auth_router = require('./routes/auth')

require('./config/passport')
app.use(passport.initialize())

app.use(cors())
app.use(express.json())

mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true , useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/',ques_router)
app.use('/api/',auth_router)

const port = process.env.PORT || 8080

app.listen(port,console.log(`Server Running on http://localhost:${port}`))
