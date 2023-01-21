const express = require ('express');
const db = require ('./utils/database');
const initModels = require ("./models/initModels");
// const Users = require('./models/users.model');
// const { json } = require('sequelize');
const usersRouters = require ('./routes/users.routes');
const coursesRouters = require ('./routes/courses.routes');
const categoriesRoutes = require ('./routes/categories.routes');
const videosRoutes = require ('./routes/videos.routes')

//crea una instancia
const app = express();
app.use(express.json());

const PORT = 8000;

//probar conexion a base de datos
db.authenticate()
.then (()=> console.log ('Autenticación exitosa'))
.catch ((error) => console.log (error));
//

initModels();

//vamos a usar el metodo sync de bd
db.sync({alter: false})
  .then (() => console.log ('Base de datos sincronizada'))
  .catch ((error) => console.log (error))

app.get ('/', (req, res) => {
    res.status(200).json({message: 'Bienvenido al servidor'});
});

app.use('/api/v1', usersRouters);
app.use('/api/v1', coursesRouters);
app.use('/api/v1', categoriesRoutes);
app.use('/api/v1', videosRoutes)



app.listen(PORT, () => {
    console.log(`Servidor ecuchando en el puerto ${PORT}`)
})