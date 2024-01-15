// function chai() {
//     console.log(this);
// }
// chai();  //we got many values 


// function chai() {
//     let username = "Ayushman";
//     console.log(this.username);
// }
// chai(); //undefined

const chai = () => {
    let username = "Ayushman"
    console.log(this);
}
chai();  //output {};

//SEE THIS VEDIO ONCE MORE


