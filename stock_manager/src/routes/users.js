const { Router } = require('express');
const { getAll, getById, addUser, updateUser, deleteUser } = require('../controllers/users');
// se va a imporatar ek controlador 

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/', getAll); //el objeto de router se va a utilizar de manera regular como express que sea de metodo GET
//se va a definir la ruta se debe ser realitica q se puso en resquets, bueno es donde se envia la solicitud al controlador


// Ruta para obtener un usuario por ID
router.get('/:id', getById);

// Ruta para agregar un usuario
router.post('/', addUser);

// Ruta para actualizar un usuario
router.put('/:id', updateUser);

// Ruta para eliminar un usuario
router.delete('/:id', deleteUser);

module.exports = router;
