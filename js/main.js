const obj = {
    'Student': [
        {
            "name": "Raj",
            "Age": "15",
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
    ]
};


const newArray = obj.Student.filter(function (el) {
    return el.Age >= 15 &&
        el.RollNumber <= 200 &&
        el.Marks >= 80
});
const againNewArray = obj.Student.filter(function (el) {
    return el.RollNumber >= 100 &&
        el.Marks >= 99

});
console.log("=================", newArray, "=================")
console.log("=================", againNewArray, "=================")


const words = ["faizan", "khan", "developers", "vueJs/Nuxt", "Compiler"]
const result = words.filter(word => word.length <= 6)
console.log("====================", words, "=================")
console.log("====================", result, "=================")