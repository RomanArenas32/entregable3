const db = require("../utils/database");
const Users = require("../models/users.model");
const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");
const UserCourses = require("../models/userCourses.model");

const users = [
  {
    firstName: "Cristian",
    lastName: "Narvaez",
    password: "123",
    email: "crisitan@gmail.com",
  },
  {
    firstName: "Roman",
    lastName: "Arena",
    password: "1234",
    email: "roma@gmail.com",
  },
  {
    firstName: "Mega",
    lastName: "Obrian",
    password: "12345",
    email: "mega@gmail.com",
  },
];

const courses = [
  { title: "Matematica", description: "shalasha", instructor: "Mario Gomez" },
  { title: "Lengua", description: "sha", instructor: "Andres Juan" },
  { title: "Fisica", description: "shala", instructor: "Peter Guty" },
];

const categories = [
  { name: "personal", courseId: 1 },
  { name: "educacion", courseId: 1 },
  { name: "salud", courseId: 2 },
  { name: "trabajo", courseId: 2 },
];

const videos = [
    {title: 'suma' , url: 'https://second-price'  , courseId:1},
    {title: 'resta' , url: 'https://second-price1'  , courseId:2},
    {title: 'multiplica' , url: 'https://second-price2'  , courseId:3}
];

// const userCourses = [
//    { userId: 1  , courseId:1 },
//    { userId: 2  , courseId:1 },
//     {userId: 3  , courseId:2 },
//     {userId: 3 , courseId:2 },
//     {userId: 2  , courseId:3},
// ];

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando seed");
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 150);
    setTimeout(() => {
      categories.forEach((catagory) => Categories.create(catagory));
    }, 300);
    setTimeout(() => {
        videos.forEach(video => Videos.create(video));
    }, 450);
    //   setTimeout(() => {
  //     userCourses.forEach(userCourse => UserCourses.create(userCourse))
  // }, 250);
   
  })
  .catch((error) => console.log(error));
