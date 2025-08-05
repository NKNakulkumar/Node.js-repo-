import readline from "readline";
import chalk from 'chalk';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todos = []

const yellow = chalk.bgHex('#FFFF00')
const blue = chalk.bgHex('#00FFFB')
const lightblue = chalk.bgHex('#3DA8FF')
const orange = chalk.bgHex('#FCB045')
const green = chalk.bgHex('#0FF20F')
const light = chalk.bgHex('#FFA1C6')
const pink = chalk.bgHex('#FF42E9')
const red = chalk.bgHex('#FF3333')
const violet = chalk.bgHex('#CC5EFF')

const showmenu = () => {
    console.log("📝",blue.hex('#020024').bold(" 1. Add Tasks \n"))
    console.log("👀",blue.hex('#020024').bold(" 2. View Tasks \n"))
    console.log("📤",blue.hex('#020024').bold(" 3. End Task \n"))
    rl.question(yellow.hex('#020024').bold("\n Choose your option- " ), handleInput)
}
const handleInput = (option) => {
    if (option === "1") {
        rl.question("\n📝 " + orange.hex('#020024').bold(" Enter the task- "), (task) => {
            todos.push(task);
            console.log("\n📁",violet.hex('#020024').bold(green.hex('#020024').bold(" Task Added- "),task),"\n")
            showmenu();
        })

    }
    else if (option === "2") {
        console.log("\n📕",green.hex('#020024').bold.underline(" Your Todo List Data- \n"))
        todos.forEach((task,index)=>{
        console.log("📂",light.hex('#020024').bold.underline(` ${index}. ${task} \n`))
        })
    
        showmenu();
    }
    else if (option === "3") {
        console.log("\n💗",pink.hex('#020024').bold(" Thanks for visit my todo app , Good Byee "),"👋\n")
        rl.close();
       
    }
    else{
        console.log("\n❌",red.hex('#020024').bold(" Invalid option , Plse choose 1,2,3 \n"))
        showmenu();
    }
    
}
showmenu();
