const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");

class CoursesServices {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw new error();
    }
  }
  static async getById(id) {
    try {
      const result = await Courses.findByPk(id);
      return result;
    } catch (error) {
      throw new error();
    }
  }
  static async getWithCategories(id) {
    try {
      const result = await Courses.findOne({
        where: { id },
        include: {
          model: Categories,
          attributes: ["name"],
          as: "courseCategories",
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getWithVideos(id) {
    try {
      const result = await Courses.findOne({
        where: { id },
        include: {
          model: Videos,
          attributes: ["url"],
          as: "courseVideo",
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(user) {
    try {
      const result = await Courses.create(user);
      return result;
    } catch (error) {
      throw new error();
    }
  }
  static async upDate(id, field) {
    try {
      const result = await Courses.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw new error();
    }
  }

  static async delete(id) {
    try {
      const result = Courses.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw new error();
    }
  }
}

module.exports = CoursesServices;
