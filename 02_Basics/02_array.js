const marvel = ["thor", "Ironman", "spiderman"];
const dc_heros = ["spiderman", "flash", "batman"];

// marvel.push(dc_heros);  //took another array as input
// console.log(marvel);  
// console.log(marvel[3][1]);

// const allheros=marvel.concat(dc_heros); //merge two array
// console.log(allheros);

// const all_new_heros=[...marvel,...dc_heros];  //merge two arrays or spread out elements of array one by one
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [, 6, 7, [4, 5]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("ayushman"));
// console.log(Array.from("ayushman"));

// console.log(Array.from({name:"ayushman"}));
// //give empty as output []

let score1=100;
let score2=120;
let score3=300;
console.log(Array.of(score1,score2,score3));