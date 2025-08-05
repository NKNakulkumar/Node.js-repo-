const { url } = require('inspector');
const http = require('http');
const port=process.env.PORT || 3000;
const server= http.createServer((req , res)=>{
    res.statusCode=200;
    res.setHeader('Content-typr','text/html')
    console.log(req.url);
    if (req.url=='/') {
    res.statusCode=200;
    res.end(' <h1> This is a code with Nakul</h1> <p>This is nakul yt</p>' );
        
    }
   else if( req.url=='/about'){
    res.statusCode=200;
    res.end(' <h1> About the  code with Nakul</h1><p>About the nakul yt</p>');

   }
   else{
    res.statusCode= 404;
    res.end(' <h1> Not Found</h1>');

   }
})
server.listen(port,()=>{
console.log('Server on listening ${port}');
});
