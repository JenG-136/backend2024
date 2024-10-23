const express = require('express');

class Server {
    constructor(){ //es un metodo que se ejecuta de manera automaticamente para crear o ejeciutar un objeto 
        this.app = express();   //para tomar el clase de server y tomar el express como un atributo
        this.port = 3000; //atributo para almacenar el numero de puerto
        this.app.use(express.json());

    }


    start(){ //metodo para llamar listen para que no sea automaticamente 
        this.app.listen(this.port,()=>{ //aqui donde llama el port
            console.log('Server listening on port ' + this.port);//para catenar el port(puerto)
        });
    }
}

//para usar el archivo fuera, seria exportar 
module.exports = {Server};

