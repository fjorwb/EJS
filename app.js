const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 5000

app.use(express.static('/public'))
app.use('/css', express.static(__dirname + '/public/css'))
// app.use('/views', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))

app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', {title: 'Home Page'})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Page', layout: './layouts/sidebar'})
})

app.listen(port, console.info(`Listening at port: ${port}`))
