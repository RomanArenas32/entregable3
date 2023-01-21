//instancia para la conexion de la bd
const db = require ('../utils/database');
//tipos de datos de sequelize
const {DataTypes} = require ('sequelize');
const Courses = require ("./courses.models");

//definir el modelo de usuarios, los modelos se define con una mayuscula
//parametros nombre de la tabla y atributos de las tablas
const Categories = db.define('categories', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    courseId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "course_id",
        references: {
            model: Courses,
            key: "id",
        },
    },    
},
{
    timestamps: false,
});

module.exports = Categories;