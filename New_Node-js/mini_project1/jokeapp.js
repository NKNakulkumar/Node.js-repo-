import https from "https"

const Joke=()=>{
    const url  =" https://official-joke-api.appspot.com/random_joke"
    https.get(url,(incomingmessege)=>{ //  incomingmessege - response
        let data = ""
incomingmessege.on('data',(chunk)=>{
data+=chunk;

})
incomingmessege.on('end',()=>{
    const joke = JSON.parse(data)
    console.log(joke)
})
})

}
Joke()