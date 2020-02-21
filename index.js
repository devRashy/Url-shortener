const express = require('express')
const connectDB = require('./config/db.js')


const app = express()

//connect to DB
connectDB()

app.use(express.json({extended: false}))

// define routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))


const PORT = 5000

app.listen(PORT, () => {
    console.log('server running on port ' + PORT)
})