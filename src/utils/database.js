const {Sequelize} = require ('sequelize');
// crear una instancia con parametros d configuracion de base de datos 
const db = new Sequelize ({
    //obejo de configuracion, son las credenciales de mi base de datos
    database: "entreg3",
    username: "postgres",
    host:"localhost", //127.0.0.1 es lo mismo quelocal host
    post: "5432",
    password: "ruut",
    dialect: "postgres",
    logging: false
});

module.exports = db;