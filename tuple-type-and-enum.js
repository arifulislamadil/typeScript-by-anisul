// Mixed data type - key, value;
var user;
user = [101, "anis"];
// console.log(user)
// Type of Enum : numeric, string, heterogeneous 
//Numeric Enum
var requestType;
(function (requestType) {
    requestType[requestType["redData"] = 0] = "redData";
    requestType[requestType["saveData"] = 1] = "saveData";
    requestType[requestType["deleteData"] = 2] = "deleteData";
})(requestType || (requestType = {}));
console.log(requestType.deleteData);
console.log(requestType["redData"]);
