//singleton

// Object literals

const mySym = Symbol("key1");
const right_mySym = Symbol("right_key1");
console.log(typeof mySym);
const JsUser = {
    mySym: "myKey1", //not giving error now but this'nt right way
    [right_mySym]: "right_mykey1",  //imp in interview
    name: "Ayushman",
    "full Name": "Ayushman Tamrakar", //we cant acess this value by . we have to use ""
    "FatherName": "Vimal kumar",
    age: 20,
    location: "Jaipur",
    email: "ayushman@google",
    lastLoginDays: ["Monaday", "TuesDay"]
};

console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser."full Name");//give error 
console.log(JsUser["full Name"]);

console.log(JsUser.FatherName) //CAN access  beooz there is not spaces

console.log(JsUser.mySym); //not a symbol data type but can access
console.log(typeof JsUser.mySym); //string

JsUser.email = "ChangedEmail@gmailcom";
console.log(JsUser.email);
// Object.freeze(JsUser); //to ingnore further changes
JsUser.age = 100;
console.log(JsUser.age);

//symbol referered
// console.log(JsUser.right_mySym);
// console.log(typeof JsUser.right_mySym);


//printing 
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");
}

console.log(JsUser.greeting);  //undefined 
console.log(JsUser.greeting()); //TypeError: JsUser.greeting is not a function when frezze

JsUser.greetingTwo=function(){
    console.log('Hello Js User , ${this.name}');//to use same object [properties as vairble we use this.]
}
