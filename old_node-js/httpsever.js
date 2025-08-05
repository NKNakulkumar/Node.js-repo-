const { url } = require('inspector');
const http = require('http');
const port=process.env.PORT|| 3000;
const server= http.createServer((req , res)=>{
    console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-typr','text/html')
    res.end('<h1> This is a code with Nakul</h1>');
})
server.listen(port,()=>{
console.log('Server on listening ${port}');
});
