const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.use(express.static("public"))

const recipes = require("./data")

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("index", { recipes })
})

server.get("/sobre", function(req,res) {
    return res.render("sobre")
})

server.get("/receitas", (req,res) =>{
    return res.render("receitas", { recipes })
})

server.get("/receitas/:index", function (req, res) {
    const recipeIndex = req.params.index;
  
    console.log(recipes[recipeIndex]);

    return res.render("receitas-info", { recipes: recipes[recipeIndex]})
  })

server.listen(5000, function() {
    console.log("server is running")
})