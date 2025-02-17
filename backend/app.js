const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())


app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })


app.use('/ai', aiRoutes)

const PORT = 3000 || process.env.PORT



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})



module.exports = app