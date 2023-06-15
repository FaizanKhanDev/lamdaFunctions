const findIndexOfArray = [12, 15, 123, 124]
const newFindIndexOfArray = (elemt) => elemt > 100

console.log(findIndexOfArray.findIndex(newFindIndexOfArray), "========================== Finding index =============")




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



const regionName = "Canada";
const regionIndex = addressInfosFindIndex.regions.findIndex(region => region.name === regionName);
console.log("Region index:", regionIndex);



const myProvincesName = "Sindh";
const provincesIndex = addressInfosFindIndex.provinces.findIndex(province => province.name === myProvincesName)
console.log("==============provincesIndex", provincesIndex)
console.log(addressInfosFindIndex)
const myWebsiteIndex = "https://faizankhandev.netlify.app/"
const websiteResultOfIndex = addressInfosFindIndex.bussinessWebsiteName === myWebsiteIndex
console.log(websiteResultOfIndex)