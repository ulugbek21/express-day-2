const express = require('express')
const path = require('path')
const app = express()
const port = 9000

app.use(express.static('public'))
app.use(express.urlencoded())

var students = []

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/html/index.html"))
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "/html/about.html"))
})

app.post("/register", (req, res) => {
    var student = {
        firstName: req.body['first-name'],
        lastName: req.body['last-name'],
    }
    students.push(student)
    res.redirect("/list")
})

app.get("/list", (req, res) => {
    var response = "<ul>"
    for (let i = 0; i < students.length; i++) {
        response += "<li>" + students[i].firstName + " " + students[i].lastName + "</li>"
    }

    // students = [ {firstName: "John", secondName: "Doe"}, {firstName: "Rustam", lastName: "Rajabov"} ]
    response += "</ul>"
    res.send(response)
})

app.listen(port, () => {
    console.log("Listening on port", port)
})


// Pseudocode
// 1. 


