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
app.get('/profile',function(req,res,next){
    return next(new Error("Something went wrong"))
})

app.use(function(errm,req,res,next){
    console.error(errm.stack)
    res.status(500).send('something broke!')
})

app.listen(3000)