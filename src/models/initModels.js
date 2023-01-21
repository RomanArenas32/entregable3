//vamos a importar todos los modelos creados
const Users = require ("./users.model");
const UserCourses = require ( "./userCourses.model");
const Courses = require ("./courses.models");
const Categories = require ("./categories.models");
const Videos = require ("./videos.models");

const initModels = () => {

    
    UserCourses.belongsTo(Users, {as: "userCurse", foreignKey: "user_id"}); //beLongsTo (pertenece a: )
    Users.hasMany(UserCourses, {as: "course", foreignKey: "user_id"}); //hasMany (tiene muchos: )
    
    UserCourses.belongsTo(Courses, {as: "task", foreignKey: "course_id"});
    Courses.hasMany(UserCourses, {as: "courses", foreignKey: "course_id"});
   
    Categories.belongsTo(Courses, {as: "category", foreignKey: "course_id"});
    Courses.hasMany(Categories, {as: "courseCategories", foreignKey: "course_id"});

    Videos.belongsTo(Courses, {as: "video", foreignKey: "course_id"});
    Courses.hasMany(Videos, {as: "courseVideo", foreignKey: "course_id"});
}

module.exports = initModels;
