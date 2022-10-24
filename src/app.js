const express = require('express')
const app = express()
const fs = require('fs')
const port = process.env.PORT || 8000
const path = require('path')
const hbs = require('hbs')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const staticpath = path.join(__dirname, '../public')

app.use(express.static(staticpath))
const templatepath = path.join(__dirname, '../template/views')

const partialpath = path.join(__dirname, '../template/partials')

app.set('view engine', 'hbs')
app.set('views', templatepath)
hbs.registerPartials(partialpath)
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})
app.get('/features', (req, res) => {})
app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(port, () => {
  console.log(`Listening  to the ${port}`)
})
