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


const addressInfo = {
    bussinessWebsiteName: "https://faizankhandev.netlify.app/",
    regions: [
        { name: "United", code: "US" },
        { name: "Pakistan", code: "Pk" },
        { name: "Canada", code: "CA" },
    ],
    provinces: [
        { name: "Sindhi", code: "SI" },
        { name: "Punjab", code: "PU" },
        { name: "Khyber", code: "KY" },
        { name: "balochistan", code: "BA" }
    ],
    cities: [
        { name: "karachi", code: "KHI" },
        { name: "Hyderabad", code: "HD" },
    ],
    completeAddress: "landhi no1 Area 37D house no 480 street no9 karachi",
    companyPhoneNumber: "03162177746",
    companyEmail: "faizan480khan@gmail.com",
    postalCode: 123123,
    selectedRegion: "Pk",
    selectedCity: "KHI",
    selectedProvince: "SI",

}
const findAddressInfo = (elem) => {
    return elem.name === "United"
}
const myFoundResults = addressInfo.regions.find(findAddressInfo)
console.log(myFoundResults)

const myResults = addressInfo.regions.length
console.log(myResults)
