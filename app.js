const express = require("express")
const app = express()
const path = require("path")
const port = 5000

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.listen(port, () => {
    console.log(`[server] corriendo en el puerto ${port} (http://localhost:5000/)`);
})