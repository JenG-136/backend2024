const {createServer} = require("http");

const server = createServer((req, res)=>{
    console.log(req.url);
    res.writeHead(500); //solo se puede ver en bruno, en navegador no
    res.write("Bienvenidos a mi primer servidor web ");
    res.end();
});

server.listen(8090);
console.log("servidor web iniciado en 8090");

