const { Router } = require("express");
const {
    getAllCategories,
    getCategoriesById,
    createCategories,
    updateCategories,
    deleteCategories,
} = require("../constrollers/categories.controllers");

const router = Router();
//constrolador
//obtener todos usuarios de la base de dato
router.get("/categories", getAllCategories);
//obtener un usuario
router.get("/categories/:id", getCategoriesById);
//obtener curso con categoria
// router.get ('/categories/:id/course', getUserWithCourse);
//Creando un usuario
router.post("/categories", createCategories);
//Actualizando un usuario
router.put("/categories/:id", updateCategories);
//Eliminando un usuario
router.delete("/categories/:id", deleteCategories);

module.exports = router;
