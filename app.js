const express  = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const homeRouter = require('./router/homeRouter')

const port = process.env.port || 9000;

const app = express()

//DB Connection
mongoose.connect('mongodb+srv://admin:admin@cluster0.bqyslvi.mongodb.net/?retryWrites=true&w=majority')
const db = mongoose.connection

db.on("error",()=>{console.log("Error to connect to DB")})
db.once("open",()=>{console.log("Connected to DB")})

//Sets main view
app.set('view engine', 'ejs')
//Calls CSS
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', homeRouter)

app.listen(port)