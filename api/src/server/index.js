let express = require("express")
let bodyParser = require("body-parser")
let morgan = require("morgan")
let pg = require('pg')
const PORT = 2000


let pool = new pg.Pool({
  port: 5500,
  password: "",
  database: "",
  
})

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(morgan('dev'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', function(req, res) {
  res.send('Hello world!')
})

app.get('/budget', function(request, response) {

})
