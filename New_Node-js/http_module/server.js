import http from 'http'
const server = http.createServer((req,res)=>{
if (req.url==="/") {
    res.setHeader("Content-Type","text/html");
    res.write("<h1>The response are throw to a server</h1> ")
    res.end()
}
if (req.url==="/source-code") {
    res.write("This is an Node.js source code \n")
    res.end()
}
if (req.url==="/contact") {
    res.setHeader("Content-Type","text/plain");
    res.write("This is an contact page you can contact me if you have any query on this node js series. \n")
    res.end()
}
})

//web server 
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(` 🔥 Listen PORT NO ${PORT}`)
})