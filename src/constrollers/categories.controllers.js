const CategoriesServices = require("../services/categories.services");

const getAllCategories = async (req, res) => {
  try {
    const result = await CategoriesServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const getCategoriesById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CategoriesServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createCategories = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await CategoriesServices.create(newUser);
    res.status(201).json(erro.message);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await CategoriesServices.upDate(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const deleteCategories = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await CategoriesServices.delete(id);
      res.json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };
  
  module.exports = {
    getAllCategories,
    getCategoriesById,
    createCategories,
    updateCategories,
    deleteCategories,
  };
  