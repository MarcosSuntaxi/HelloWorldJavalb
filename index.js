const express = require ('express')

const app = express()

const port = 8080

app.get('/', (req,res) =>{
    res.send("Hello World yo brach main")
})

app.listen(port, ()=> {
    console.log("Server Running")
})