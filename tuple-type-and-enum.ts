// Mixed data type - key, value;

let user: [number, string];
user = [101,"anis"]
// console.log(user)


// Type of Enum : numeric, string, heterogeneous 

//Numeric Enum

enum requestType{
    redData,
    saveData,
    deleteData,
}
console.log(requestType.deleteData) 
console.log(requestType["redData"]) 