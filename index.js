const express = require ('express')

const app = express()

const port = 8080

app.get('/', (req,res) =>{
    res.send("Hello World in ypuor new brach main 16/12/2024")
})

app.listen(port, ()=> {
    console.log("Server Running")
})