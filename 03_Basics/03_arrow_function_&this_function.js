const user = {
    username: "Ayushman",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`);
        // console.log(this); //this is uncomment
    }
}

user.welcomeMessage();
user.username="sam"
user.welcomeMessage(); //now current context is sam
// sam, welcome to the website

// this line active when 
// Ayushman, welcome to the website
// {
//   username: 'Ayushman',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// sam, welcome to the website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }