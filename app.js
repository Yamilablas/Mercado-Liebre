const express = require("express")
const app = express()
const path = require("path")
const port = process.env.port || 5000

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.listen(port, () => {
    console.log(`[server]: running at port ${port} (http://localhost:${port}/).`);
})

