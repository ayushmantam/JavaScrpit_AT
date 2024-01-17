const myNums = [1, 2, 3];
const initialValue = 0;
/*
const myTotal = myNums.reduce(function (acc, currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal;
}, initialValue);

console.log(myTotal);

// acc: 0 and currVal: 1
// acc: 1 and currVal: 2
// acc: 3 and currVal: 3
// 6

*/

// const myTotal = myNums.reduce((acc, curr) => (acc + curr, 0))//giving sum=0;

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);  //6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);  //22996