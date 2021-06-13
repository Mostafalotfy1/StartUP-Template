const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    fs.readFile('../index.html', (err , data)=>{
        res.writeHead(200 , {'Content-Type' :' text/html'});
        if(err){
            res.write("ican not find ur paga");
        }else{
            res.write(data);
        }
        return res.end(); 
    })
}).listen(3000 , '127.0.0.2', ()=>{
    console.log('Running');
})