//no initialization options
const pgp = require('pg-promise')
//create database object from connection
const db = pgp(connection)

//hello world example
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`hello from express!`)
})

app.listen(port, () => {
  console.log(`this example app's ears pricked up on port ${port}`)
})