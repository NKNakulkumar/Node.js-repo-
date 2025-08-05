const fs = require("fs/promises")
const path = require("path")

const filename = "Asyncpromises.txt"
const filepath = path.join(__dirname,filename)

const operations =async()=>{
try {
    const data = await fs.writeFile(filepath,"This is an Asunc data","utf-8")
    console.log(data)
} catch (error) {
    console.error(error)
}

} 
operations();