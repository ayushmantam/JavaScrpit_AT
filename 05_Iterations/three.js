//for of 
// [" "," "," "];
// [{} {} {}] 
// const arr=[1,2,3,4,5]


// for(const num of arr){
//     console.log(num);
// }

// const greetings="hello world"
// for(const ch of greetings){
//     console.log(ch);
// }

//Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

// for(const key of map){
//     console.log(key);
// }
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]


for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// IN :- India
// USA :- United States of America
// Fr :- France

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// this giving error we will learn later 
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }