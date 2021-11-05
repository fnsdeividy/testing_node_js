const express = require('express');
const controller = require('./Controller')

const app = express()
const PORT = 4000

app.use(express.json())

app.post('/profile', controller.createProfile)
app.get('/profile/:id', controller.showProfile)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))