const {Router} = require('express');
const {getAll, getById} = require('../controllers/users'); // se va a imporatar ek controlador 

const router = Router();

router.get('/', getAll); //el objeto de router se va a utilizar de manera regular como express que sea de metodo GET
//se va a definir la ruta se debe ser realitica q se puso en resquets, bueno es donde se envia la solicitud al controlador

//se debe agregar una ruta nueva de getbyid
router.get('/:id', getById); //en el indentificador se debe poner el nombre que se va a llamar 
//NOta: debe ser ek mismo que esta poniendo en request


module.exports = router;
