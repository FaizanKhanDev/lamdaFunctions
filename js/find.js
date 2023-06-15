const findOne = [5, 12, 8, 130, 44];
const found = findOne.find(elem => elem <= 10)
console.log(found)
const naveedDev = ["findOne", "findTwo", "findThree"];
const naveedFound = naveedDev.find(function (e) {
    return e.length >= 6
})
const naveedFoundTwo = naveedDev.find(elem => elem.length <= 10)
console.log("===========naveedFoundTwo============", naveedFoundTwo, "===========naveedFoundTwo===========")
console.log("===========naveedDev============", naveedDev, "===========naveedDev===========")
console.log("===========naveedFound============", naveedFound, "===========naveedFound===========")


const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];


// function isCheerries(fruit) {
//     return fruit.name === "cherries"
// }

// console.log(inventory.find(isCheerries))



const isCheerries = (fruit) => {
    return fruit.name === "cherries"
}
console.log(inventory.find(isCheerries))


const markers = [
    { name: "black", quantity: 5 },
    { name: "White", quantity: 2 },
    { name: "red", quantity: 7 },
    { name: "green", quantity: 6 },
]

const isBlack = (color) => {
    return color.name === "black" && color.quantity === 5
}
console.log(markers.find(isBlack))



// // ES5
var x = function (x, y) {
    return x * y;
}

// // ES6
const x = (x, y) => x * y;