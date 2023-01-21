const {Router} = require ('express');
const {  
    getAllVideos,
    getVideosrById,
    createVideo,
    updateVideo,
    deleteVideo,        
    } = require ('../constrollers/video.controller');

const router = Router();
//constrolador
//obtener todos usuarios de la base de dato
router.get("/videos", getAllVideos);
//obtener un usuario
router.get("/videos/:id", getVideosrById);
//Creando un usuario
router.post("/videos", createVideo);
//Actualizando un usuario
router.put('/videos/:id', updateVideo);
//Eliminando un usuario
router.delete('/videos/:id', deleteVideo);

module.exports = router;