//Immediately Invoked Function Expression 
//to protect pollution by global variables in function


// syntax:   named IIFE
(
    function chai() {
        console.log('DB connected');
    }
)();

//syntax:
(
    () => {
        console.log('DB connected two')
    }

)();

(
    (name) => {
        console.log("DB connected two ${name}");
    }

)('Ayushman')

