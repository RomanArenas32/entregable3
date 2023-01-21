const Users = require("../models/users.model");
const UserCourses = require('../models/userCourses.model');
const Courses = require ('../models/courses.models')

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw  error;
    }
  }
  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw  error;
    }
  }
  static async getWithCourse (id) {
    try {
      const result = await Users.findOne({
        where: {id},
        include: {
          model: UserCourses,
          as: "course",
          attributes: ["id"],
          include: {
            model: Courses,
            as: "task",
        }
        },        
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw  error;
    }
  }
  static async upDate(id, field) {
    try {
      const result = await Users.update(field, { where: { id } } );
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = Users.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
