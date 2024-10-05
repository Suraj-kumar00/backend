const express = require('express')
// import express from "express" => This is an another way to import express just a different style to use express.
const app = express()
port = 3000;

app.get('/',(req,res )=> {
    res.send("Hello from backend")

})

// we can send multiple request

app.get('/twitter', (req,res)=>{
    res.send("Surajk_umar01")
})

app.listen(port, ()=>{
    console.log(`App is listening at ${port}`);
})