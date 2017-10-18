let express = require("express")
let bodyParser = require("body-parser")
let morgan = require("morgan")
let pg = require('pg')
const PORT = 2000


let pool = new pg.Pool({
  port: 5432,
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

app.get('/budget', function(request, response) {
  pool.connect(function(err, db, done){
    if (err) {
      return response.status(400).send(err)
    }
    else {
      db.query("SELECT * FROM budget", function(err, table) {
        done()
        if(err) {
          return response.status(404).send({message: "db call error!"})
        }
        else {
          return response.status(200).send(table.rows)
        }
      })
    }
  })
})

app.listen(PORT, () => console.log("listening on port " + PORT))
