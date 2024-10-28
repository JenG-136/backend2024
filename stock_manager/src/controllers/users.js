const { request, response } = require('express');

const users = [ //crear arreglo
  { id: 1, name: 'Jeni GR' }, //los registro que se va a almacenar
  { id: 2, name: 'Jen GR' },
  { id: 3, name: 'Lalis ig' },
];

/*const getMessage = (req = resquest, res=response) => { //se va a crear la funcion que responda la consulta en particular
//la funcion () =>{} espera el route q lleva 2 parametros 
res.send('Hello Bangtan_ HELLO FROM THE USERS CONTROLLER!');

} */

// paraObtener todos los usuarios
const getAll = (req = request, res = response) => {
  res.send(users); //se pide que muestre el usuario
};

// para Obtener un usuario por ID
const getById = (req = request, res = response) => {
  const { id } = req.params; ;//se acceda en el solicitud atreves de req
  //se tiene que validar un numero por id

  if (isNaN(id)) {
    res.status(400).send('Invalid ID');
    return;
  }

  //hacer un arrgelo donde pasa un fincion deonde debe terner TRUBUTO Y QUE REPRESENTA EL ARRGELO
  const user = users.find((user) => user.id === +id);
  //si el variable de usuario termine el valor si a ningino se debe avisar al users
  if (!user) {
    res.status(404).send('User not found');
    return;
  }
  res.send(user);
};

// paraAgregar un nuevo usuario
const addUser = (req = request, res = response) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).send('Name is required');
    return;
  }
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).send(newUser);
};

// Actualizar un usuario existente
const updateUser = (req = request, res = response) => {
  const { id } = req.params;
  const { name } = req.body;

  if (isNaN(id)) {
    res.status(400).send('Invalid ID');
    return;
  }

  const user = users.find((user) => user.id === +id);
  if (!user) {
    res.status(404).send('User not found');
    return;
  }

  if (!name) {
    res.status(400).send('Name is required');
    return;
  }

  user.name = name;
  res.send(user);
};

// Eliminar un usuario
const deleteUser = (req = request, res = response) => {
  const { id } = req.params;

  if (isNaN(id)) {
    res.status(400).send('Invalid ID');
    return;
  }

  const index = users.findIndex((user) => user.id === +id);
  if (index === -1) {
    res.status(404).send('User not found');
    return;
  }

  users.splice(index, 1);
  res.status(204).send(); // 204 No Content indica éxito sin contenido adicional
};

module.exports = { getAll, getById, addUser, updateUser, deleteUser };