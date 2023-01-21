//instancia para la conexion de la bd
const db = require ('../utils/database');
const Users = require ("./users.model");
const Courses = require ("./courses.models");

//tipos de datos de sequelize
const {DataTypes} = require ('sequelize');

//definir el modelo de usuarios, los modelos se define con una mayuscula
//parametros nombre de la tabla y atributos de las tablas
const UserCourses = db.define('userCourses', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
            model: Users,
            key: "id",
        }
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

module.exports = UserCourses;
