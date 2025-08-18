// npm init -> package.json ->  manifest for your project, containing essential metadata and configuration information.

// File system operations

const fs= require('fs') 

fs.writeFile("hey.txt","hey hello kaise ho",function(err){
    if(err) console.error(err)
    else console.log("done")
})
fs.appendFile("hey.txt"," I'm good",function(err){
    if(err) console.error(err)
    else console.log("done")
})
fs.rename("hey.txt","my.txt",function(err){
    if(err) console.error(err)
    else console.log("done")
})
fs.copyFile("my.txt","./copy/copy.txt",function(err){
    if(err) console.error(err)
    else console.log("done")
})
// fs.unlink("./copy/copy.txt",function(err){          // deleting the file
//     if(err) console.error(err.message)
//     else console.log("removed")
// })
// fs.rmdir("./copy",function(err){                 // not directly remmove the file with content
//     if(err) console.error(err.message)
//     else console.log("removed")
// })
fs.mkdir("./newfile",function(err){           
    if(err) console.error(err.message)
    else console.log("removed")
})