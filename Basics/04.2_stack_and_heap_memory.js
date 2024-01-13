//stack (Primitive)  , Heap (Non Primitive)
/*
let myYoutubename="hiteshChoudhary"
let anothername=myYoutubename;

console.log(anothername);
anothername="Chai aur Code";

console.log(myYoutubename);
console.log(anothername);
*/
let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne;
userTwo.email="ayushman@google.com";

console.log(userOne.email);   //these both have same output
console.log(userTwo.email);    //by reference change hua hai
