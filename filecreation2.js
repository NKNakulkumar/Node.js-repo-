import readline from "readline";
import fs from "fs"
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


const handleINput=()=>{
    rl.question("Enter the file name",(file)=>{
        rl.question(" enter the content",(content)=>{
     fs.writeFile(`${file}.txt`,content,(error)=>{
        if(error){
            console.error(error.message)
        }
        else{
        console.log(`file created  ${file}.txt`);
        }
        rl.close()
     })
        })
    })
}

   handleINput();