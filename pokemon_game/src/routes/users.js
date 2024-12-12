const {Router} = require('express');
const { getAllUsers,getUser, createUser, updateUser, destroyUser, userProtected } = require('../controllers/users');
const verifyToken = require('../middlewares/verifyToken');

const router = Router();

router.get('/', verifyToken, getAllUsers); //sesión inicial
router.get('/protected', verifyToken, userProtected);
router.get('/:id', verifyToken, getUser); //sesión iniciada
router.post('/', verifyToken, createUser); //sesión iniciaday usuario administrador 
router.put('/:id', verifyToken, updateUser); //sesión iniciaday usuario administrador 
router.delete('/:id', verifyToken, destroyUser); //sesión iniciaday usuario administrador 



module.exports = router;