const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const port = 3000

// express template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// setting static files
app.use(express.static("public"))

// routes setting
app.get("/", (req, res) => {
  res.render("index")
})

// start and listen on the express server
app.listen(port, () => {
  console.log(`Express is listening on localhost: ${port}`)
})
