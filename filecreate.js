import readline from 'readline'
import fs from 'fs'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const Filecreation=()=>{
rl.question('Enter The file Name - ',(filename)=>{
rl.question('Enter the file content',(content)=>{
    fs.writeFile(`${filename}.txt`,content,(error)=>{
        if (error) {
            console.log(error.message)
        }
        else{
            console.log(`Your file ${filename} is create Succcessfully 👍🏻 `)
        }
        rl.close();
    })
})
})

}
Filecreation();
