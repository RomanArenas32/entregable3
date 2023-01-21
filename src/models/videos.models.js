//instancia para la conexion de la bd
const db = require ('../utils/database');
//tipos de datos de sequelize
const {DataTypes} = require ('sequelize');
const Courses = require ("./courses.models")

//definir el modelo de usuarios, los modelos se define con una mayuscula
//parametros nombre de la tabla y atributos de las tablas
const Videos = db.define('videos', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "course_id",
        references: {
            model: Courses,
            key: "id"
        },
    },
},
);

module.exports = Videos;
