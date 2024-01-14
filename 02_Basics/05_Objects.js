const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}


//HOW TO DESTRUCTOR AN OBJECT
// const{courseInstructor}=course;
// console.log(courseInstructor);

const { courseInstructor: Instructor } = course;
console.log(Instructor);

/*
//Later in React
const navbar = ({ company }) => {

}
navbar(company="Amazon");
*/

// {
//     "name":"Ayushman",
//     "courseName":"Js in Hindi",
//     "price":"free"
// }