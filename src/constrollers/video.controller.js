const VideosServices = require("../services/videos.services");

const getAllVideos = async (req, res) => {
  try {
    const result = await VideosServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const getVideosrById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await VideosServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createVideo = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await VideosServices.create(newUser);
    res.status(201).json(erro.message);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await VideosServices.upDate(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await VideosServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllVideos,
  getVideosrById,
  createVideo,
  updateVideo,
  deleteVideo,
};
