const fs = require("fs")
const path = require("path")

const filename = "promise.txt"
const filepath = path.join(__dirname,filename)

// Write file

// fs.promises.writeFile(filepath,"This is an promises data","utf-8")
// .then(()=> console.log("File has been created "))
// .catch((err)=> console.log(err))

// Read file 
// fs.promises.readFile(filepath,"utf-8")
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))

// Append data
// fs.promises.appendFile(filepath,"\n This is an updated promises data","utf-8")
// .then(()=> console.log("File has been updated  "))
// .catch((err)=> console.log(err))

// Delete data 
// fs.promises.unlink(filepath)
// .then(()=> console.log("Delete data "))
// .catch((err)=> console.log(err))

//------------------->> Bonus you can use ---- const fs = require("fs/promises")
// you dont need to write fs.promises everytime on crud operations .