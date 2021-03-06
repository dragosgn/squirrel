let express = require("express")
let bodyParser = require("body-parser")
let morgan = require("morgan")
let pg = require('pg')
const PORT = 2000


// Graphql
const { buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')


// graphql custom implementation
let schema = buildSchema(`
  type Query {
    postTitle: String,
    blogTitle: String
  }
`)

let pool = new pg.Pool({
  port: 5430,
  password: "",
  database: "squirrel",
  max: 10,
  host: "localhost",
  user: 'postgres',
  idleTimeoutMillis: 1000
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

app.get('/api/budget', function(req, res) {
  pool.connect(function(err, db, done){
    if (err) {
      return res.status(400).send(err)
    }
    else {
      db.query("SELECT * FROM budget", function(err, table) {
        done()
        if(err) {
          return res.status(404).send({message: "db call error!"})
        }
        else {
          return res.status(200).json(table.rows)
        }
      })
    }
  })
})


app.post('api/new-budget', function (req, res) {
  console.log("request", req)
})


app.post('api/new-investment-estimation', function(req, res) {
  console.log("request", req)
})

app.listen(PORT, () => console.log("listening on port " + PORT))
