//way 1
// const tinderUser=new Object();

//way2
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sunny";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser={
    email:"someone@gmail.com",
    fullName:{
        usernameFullName:{
            firstName:"Ayushman",
            lastName:"Tamrakar"
        }
    }
}

console.log(regularUser.fullName.usernameFullName.firstName);

//combine objects
const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const obj4={5:"a",6:"b"};

// const obj3={obj1,obj2};
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj3);  //same problem as array

// to solve this 
// const obj3=Object.assign(obj1,obj2);
// const obj3=Object.assign({},obj1,obj2,obj4);
// {} is given as empty object 
// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


//most used
const obj3={...obj1,...obj2};
console.log(obj3);

const users=[
    {

    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {

    },
]

// console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));//output as array
console.log(Object.values(tinderUser));//output as array
console.log(Object.entries(tinderUser));//output as array
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //check present or not

