let express = require("express")
let bodyParser = require("body-parser")
let path = require("path")

let app = express()
let PORT = process.env.PORT || 3600

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/app/public'))

require("./app/routing/apiRoutes.js")(app)
require("./app/routing/htmlRoutes.js")(app)

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT)
  })