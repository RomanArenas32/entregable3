const Categories = require("../models/categories.models");

class CategoriesServices {
  static async getAll() {
    try {
      const result = await Categories.findAll();
      return result;
    } catch (error) {
      throw new error();
    }
  }
  static async getById(id) {
    try {
      const result = await Categories.findByPk(id);
      return result;
    } catch (error) {
      throw new error();
    }
  }
  static async create(user) {
    try {
      const result = await Categories.create(user);
      return result;
    } catch (error) {
      throw new error();
    }
  }
  static async upDate(id, field) {
    try {
      const result = await Categories.update(field, { where: { id } } );
      return result;
    } catch (error) {
      throw new error();
    }
  }

  static async delete(id) {
    try {
      const result = Categories.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw new error();
    }
  }
}

module.exports = CategoriesServices;