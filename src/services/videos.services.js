const Videos = require("../models/videos.models");

class VideosServices {
  static async getAll() {
    try {
      const result = await Videos.findAll();
      return result;
    } catch (error) {
      throw  error;
    }
  }
  static async getById(id) {
    try {
      const result = await Videos.findByPk(id);
      return result;
    } catch (error) {
      throw  error;
    }
  }
  static async create(user) {
    try {
      const result = await Videos.create(user);
      return result;
    } catch (error) {
      throw  error;
    }
  }
  static async upDate(id, field) {
    try {
      const result = await Videos.update(field, { where: { id } } );
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = Videos.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VideosServices;