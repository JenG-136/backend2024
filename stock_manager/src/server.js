const express = require('express');
const usersRoutes = require('./routes/users');
const staffRoutes = require('./routes/staff'); // rita para staff
const productsRoutes = require('./routes/products'); //rutas de productos 
const suppliersRoutes = require('./routes/suppliers');
const products_suppliersRoutes = require('./routes/products_suppliers'); 

class Server {
    constructor(){ //es un metodo que se ejecuta de manera automaticamente para crear o ejeciutar un objeto 
        this.app = express();   //para tomar el clase de server y tomar el express como un atributo
        this.port = 3000; //atributo para almacenar el numero de puerto
        this.app.use(express.json()); //es un metodo de express-- es un funcion que interseta una solicitud que sea anlizada de nuestra backen para ubicar la ruta 
//se agrega para nuevo registro cuando utiliza GET O POST.

        this.middlewars();//aqui lompone para que se ejecute el metodo 
        this.routes(); 

    }

    middlewars(){//se crea un metodo de clase
this.app.use(express.json());
    } 

    //para definir el get_ primero se va a crear un metodo calses
    routes(){
        /*this.app.get('/', (req, res) =>{
            res.send('Hello world!');
        });*/
        this.app.use('/users', usersRoutes);//especificar la ruta que se a invpcar al objeto jsjsj
        this.app.use('/staff', staffRoutes);
        this.app.use('/products', productsRoutes);
        this.app.use('/suppliers', suppliersRoutes);
        this.app.use('/products_suppliers', products_suppliersRoutes);
    }

    start(){ //metodo para llamar listen para que no sea automaticamente 
        this.app.listen(this.port,()=>{ //aqui donde llama el port
            console.log('Server listening on port ' + this.port);//para catenar el port(puerto)
        });
    }
}

//para usar el archivo fuera, seria exportar 
module.exports = {Server};

