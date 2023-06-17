const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

const addressInfosFindIndex = {
    bussinessWebsiteName: "https://faizankhandev.netlify.app/",
    regions: [
        { name: "United", code: "US" },
        { name: "Pakistan", code: "Pk" },
        { name: "Canada", code: "CA" },
    ],
    provinces: [
        { name: "Sindh", code: "SI" },
        { name: "Punjab", code: "SI" },
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

console.log("region")
addressInfosFindIndex.regions.forEach(region => {
    console.log(`Name: ${region.name}`)
});

// addressInfosFindIndex.cities.forEach((cities) => {
//     addressInfosFindIndex.cities.push("faizan")
// })

const addNewCity = {
    name: "Landhi",
    code: "LHI",
}
console.log("cities")
addressInfosFindIndex.cities.push(addNewCity)
console.log("=====addNewCity=======", addressInfosFindIndex)
const newCity = addressInfosFindIndex.cities.filter(city => city.name === "karachi")
console.log(newCity)