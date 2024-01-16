const coding = ["js", "cpp", "ruby", "python", "cpp"]

//inbuilt hai 
// coding.forEach(function (item) { 

// })

/*
coding.forEach(function (val) {
    console.log(val);
})

// js
// cpp
// ruby
// python
// cpp

*/

//arrow function wala syntax
coding.forEach((item) => {
    console.log(item);
})


//function banake wla syntax
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

/*
coding.forEach((item,index,arr)=>){
    console.log(item,index,arr);
}
*/

const myCoding = [

    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})
