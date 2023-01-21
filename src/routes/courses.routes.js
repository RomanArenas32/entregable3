const { Router } = require("express");
const {
  getAllCourses,
  getCoursesById,
  createCourses,
  updateCourses,
  deleteCourses,
  getCourseWithCategories,
  getCourseWithVideos,
} = require("../constrollers/courses.controller");

const router = Router();
//constrolador
//obtener todos usuarios de la base de dato
router.get("/courses",getAllCourses);
//obtener un usuario
router.get("/courses/:id", getCoursesById);
//obtener curdo con categorias
router.get ('/courses/:id/categories', getCourseWithCategories);
router.get ('/courses/:id/videos', getCourseWithVideos);
//Creando un usuario
router.post("/courses", createCourses);
//Actualizando un usuario
router.put("/courses/:id", updateCourses);
//Eliminando un usuario
router.delete("/courses/:id", deleteCourses);

module.exports = router;
