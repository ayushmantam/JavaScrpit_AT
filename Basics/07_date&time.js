//date
let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());

console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toTimeString());
console.log(mydate.toUTCString());
//month starts from zero
// let myCreatetedDate=new Date(2023,0,23);
// console.log(myCreatetedDate.toDateString());

// let myTimeStamp=Date.now();
// console.log(myCreatetedDate.getTime());  //give mili(kiloseconds)

// console.log(Math.floor(Date.now()/1000));  //give seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);  //+1 to start month from one
console.log(newDate.getDay());

//Custmize format
newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone:
})