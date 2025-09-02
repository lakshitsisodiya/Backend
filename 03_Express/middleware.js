const express = require('express')
const app=express()

app.use(function(req,res,next){
    console.log("middleware is running")
    next()
})
app.use(function(req,res,next){
    console.log("middleware is running one more time")
    next()
})
app.get('/',function(req,res){
    res.send('hello world')
})
app.get('/profile',function(req,res){
    res.send('lakshit sisodiya')
})

app.listen(3000)