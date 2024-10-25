const {resquest, response, request} = require('express');

const users= [//crear un arreglo
{id: 1, name: 'Jeni GR'}, //rEGISTRO
{id: 2, name: 'Jen GR'},
{id: 3, name: 'Lalis ig'},

];

/*const getMessage = (req = resquest, res=response) => { //se va a crear la funcion que responda la consulta en particular
//la funcion () =>{} espera el route q lleva 2 parametros 
res.send('Hello Bangtan_ HELLO FROM THE USERS CONTROLLER!');

} */

const getAll = (req = resquest, res=response) => { 
    res.send(users); //se pide que muestre el usuario

}

const getById = (req = request, res = response) =>{
    const {id} = req.params;//se acceda en el solicitud atreves de req
    //se tiene que validar un numero por id
    if(isNaN(id)){
        res.status(400).send('Invalid ID');
        return; 
    }

    //hacer un arrgelo donde pasa un fincion deonde debe terner TRUBUTO Y QUE REPRESENTA EL ARRGELO
    const user = users.find(user => user.id === +id); 
    //si el variable de usuario termine el valor si a ningino se debe avisar al users
    if(!user){
        res.status(404).send('user not found');
        return;
    }

    res.send(user);
}
module.exports = {getAll, getById};

//para lunes agregar usuario, editar usuario y eliminar y crear las rutas 