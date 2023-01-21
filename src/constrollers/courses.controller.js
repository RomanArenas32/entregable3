const CoursesServices = require("../services/courses.services");

const getAllCourses = async (req, res) => {
  try {
    const result = await CoursesServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getCoursesById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CoursesServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getCourseWithCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CoursesServices.getWithCategories(id);
    res.json(result); //por defecto se responde status 200
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getCourseWithVideos = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CoursesServices.getWithVideos(id);
    res.json(result); //por defecto se responde status 200
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createCourses = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await CoursesServices.create(newUser);
    res.status(201).json(erro.message);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await CoursesServices.upDate(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CoursesServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllCourses,
  getCoursesById,
  createCourses,
  updateCourses,
  deleteCourses,
  getCourseWithCategories,
  getCourseWithVideos,
};
