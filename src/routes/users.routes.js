const {Router} = require ('express');
const { getAllUsers,
        getUserById, 
        createUser, 
        updateUser, 
        deleteUser,
        getUserWithCourse,
    } = require ('../constrollers/users.controller');

const router = Router();

//localhost:8000/users
//constrolador
//obtener todos usuarios de la base de dato
router.get("/users", getAllUsers);
//obtener un usuario
router.get('/users/:id', getUserById);
// obtener usuario con su curso
router.get ('/users/:id/course', getUserWithCourse);
// Creando un usuario
router.post('/users', createUser);
//Actualizando un usuario
router.put('/users/:id', updateUser);
//Eliminando un usuario
router.delete('/users/:id', deleteUser);

module.exports = router;