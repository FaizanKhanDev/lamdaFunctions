const obj = {
    'Student': [
        {
            "name": "Raj",
            "Age": "12",
            "RollNumber": "123",
            "Marks": "99",
        },
        {
            "name": "Faizan",
            "Age": "14",
            "RollNumber": "223",
            "Marks": "69",
        },
        {
            "name": "Vivek",
            "Age": "13",
            "RollNumber": "253",
            "Marks": "89",
        },
        {
            "name": "Vivek",
            "Age": "16",
            "RollNumber": "253",
            "Marks": "89",
        },
    ]
};


const newArray = obj.Student.filter(function (el) {
    return el.Age <= 15 &&
        el.RollNumber <= 200 &&
        el.Marks >= 80
});
const againNewArray = obj.Student.filter(function (el) {
    return el.RollNumber >= 100 &&
        el.Marks >= 99

});
console.log("=====newArray============", newArray, "===========newArray======")
console.log("=====againNewArray============", againNewArray, "========againNewArray=========")


const words = ["faizan", "khan", "developers", "vueJs/Nuxt", "Compiler"]

const result = words.filter(word => word.length <= 6)
const secondResult = words.filter(function (el) {
    return el.length >= 5

});
console.log("=========== words =========", words, "========words =========")
console.log("=========== result =========", result, "======result ===========")
console.log("======== secondResult ============", secondResult, "========secondResult =========")


const array1 = [5, 12, 8, 130, 44];


const foundNewArray = array1.filter(ele => ele = 10);
console.log("======== foundNewArray ============", foundNewArray, "======== foundNewArray ============")

const faizan = ["faizan", "naveed", "khan"]
console.log("========faizan======================", faizan, "=======faizan=======================");
const newFaizan = faizan.filter(fa => fa.length === 6)

console.log(newFaizan)

const secondNewArray = faizan.filter(function (f) {
    return f.length === 6
})
console.log("========secondNewArray======================", secondNewArray, "========secondNewArray======================",)
const addressInfos = {
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
const filterjustOneProvinces = addressInfos.provinces.filter(province => province.name !== "Sindhi")
console.log("=========filterjustOneProvinces=========", filterjustOneProvinces)

const filterProvincess = addressInfos.provinces.filter(function (el) {
    return el.name != "United"
})
console.log("=====================filterProvincess", filterProvincess)


