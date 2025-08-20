// setting up a express app

const express = require('express')
const app=express()

app.get('/',function(req,res){
    res.send('hello world')
})
app.get('/profile',function(req,res){
    res.send('lakshit sisodiya')
})

app.listen(3000)