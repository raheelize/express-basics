const express = require('express')
const path = require('path')
const app = express()
const port = 3000



// define custom middlewares
const customMiddleware = (req, res, next) => {
    console.log("Custom Middleware is Applied")
    next()
        // print request params in console
}

// using public files
app.use(express.static(path.join(__dirname, "public")))

// using custom middlewares
// app.use(customMiddleware)

// general application
app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

// general application with variable in url
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name)
})

// return html page
app.get('/page', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

// return  json 
app.get('/json', (req, res) => {
    res.json({ 'name': 'express example', 'dev': 'Raheel' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})