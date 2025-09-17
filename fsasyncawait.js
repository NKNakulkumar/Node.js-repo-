const fs = require("fs/promises")
const path = require("path")

const filename = "Asyncpromises2.txt"
const filepath = path.join(__dirname,filename)

// const filepath1 = __dirname;

const operations =async()=>{
try {
    const data = await fs.writeFile(filepath,"This is an Asunc data","utf-8",)
    // const data = await fs.readdir(filepath1)
    console.log("File create sucessfully",data)
} catch (error) {
    console.error(error)
}

} 
operations();