// Write 
const fs = require("fs")
const path = require("path")

const filename = "Async.txt"
const filepath = path.join(__dirname,filename)
// synatax = (path,data,options ,callback)

// fs.writeFile(filepath,"This is an Async data","utf-8",(err)=>{
//    if(err) console.error(err);
//    else console.log("File has been created ");
// })

// Readfile
// synatax = (path,options ,callback)
//callback - (err,data)

// fs.readFile(filepath,"utf-8",(err,data)=>{
//     if(err) console.error(err);
//     else console.log(data);
//  })

// Append - Updated the file 
// fs.appendFile(filepath,"\n This is an updated Async data","utf-8",(err)=>{
//     if(err) console.error(err);
//     else console.log("File has been Updated ");
//  })

// Delete - (path,callback)
// fs.unlink(filepath,(err)=>{
//     if(err) console.error(err);
//     else console.log("File has been Deleted  ");
//  })

// Rename file 

// rename (oldpath,newpath)

// const newfilename = "updatename.txt"
// const newpath = path.join(__dirname,newfilename)
// const renamefile = fs.renameSync(filepath,newpath)
// console.log(renamefile)