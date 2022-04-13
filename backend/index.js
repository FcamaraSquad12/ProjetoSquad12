require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

app.use(cors())

app.use(
  express.urlencoded({
    extended: true,
  }),)

app.use(express.json())

////////////////// PERSON COLLECTION FUNCTIONS /////////////////
const personRoutes = require('./routes/personRoutes')

// INSERT PERSON
app.use('/', personRoutes);

// SELECT PERSON
app.use('/', personRoutes);

// SELECT PERSON FOR ID
app.use('/people/:id', personRoutes);

// UPDATE PERSON
app.use('/people/:id', personRoutes);

// DELETE PERSON
app.use('/people/:id', personRoutes);

////////////////// GROUP COLLECTION FUNCTIONS /////////////////
const groupRoutes = require('./routes/groupRoutes')

// INSERT GROUP
app.use('/', groupRoutes);

// SELECT GROUP
app.use('/', groupRoutes);

// SELECT GROUP FOR ID
app.use('/groups/:id', groupRoutes);

// UPDATE GROUP
app.use('/groups/:id', groupRoutes);

// DELETE GROUP
app.use('/groups/:id', groupRoutes);

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@squad12.xnjgh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3001)
  })
  .catch((err) => console.log(err))
