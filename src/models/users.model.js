//instancia para la conexion de la bd
const db = require ('../utils/database');
//tipos de datos de sequelize
const {DataTypes} = require ('sequelize');

//definir el modelo de usuarios, los modelos se define con una mayuscula
//parametros nombre de la tabla y atributos de las tablas
const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
               
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
},
);

module.exports = Users;
