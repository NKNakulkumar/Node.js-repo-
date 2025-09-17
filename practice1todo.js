import readline from "readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todos =[];

const show=()=>{
    console.log("1. Add Task- ");
    console.log("2. View tasks -");
    console.log("3. Exit -");
    rl.question("Choose any option -",handleInput)
}

const handleInput=(option)=>{
if (option==="1") {
    rl.question("Enter a task -",(task)=> {
        todos.push(task);
        console.log("Here you added task -",task);
        show()
    })

}
else if(option==="2"){
console.log("Your Tasks -");
todos.forEach((task,index)=>{
console.log(`${index}.${task}`);
 });
    show();
}
else if (option==="3"){
console.log("Bood Byee 👋");
rl.close();
}

else {
console.log("Please try agian you choose wrong option -");
show()
}

} 
show();