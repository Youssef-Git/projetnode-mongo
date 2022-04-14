const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const router = require('./routes/route').router

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))

// Connexion à la base de données
mongoose.connect('mongodb+srv://Admin:root@exercicenode.a5f9y.mongodb.net/Exercicenode?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => {
    console.log(err)
})

app.use('', router)


app.listen(port, () => {
    console.log('Le server écoute sur le port ' + port)
})

