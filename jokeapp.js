
import https from "https"

const Joke=()=>{
const url = "https://official-joke-api.appspot.com/jokes/programming/random";
    https.get(url,(response)=>{ //  response 
        let data = ""
response.on('data',(chunk)=>{
data+=chunk;

})
response.on('end',()=>{
    const [joke] = JSON.parse(data)
    // console.log(joke)
    console.log(`Joke type ${joke.type}`);
    console.log(`${joke.setup}`);
    console.log(`${joke.punchline}`);
})
response.on('error',(error)=>{
console.log(`Error API are created error`,error.message);
})
})

}
Joke()