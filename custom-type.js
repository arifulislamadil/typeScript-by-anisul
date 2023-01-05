var users5;
users5 = [];
var users4;
users4 = { userName: "Ariful", userId: 343 };
users5.push(users4);
var users6;
users6 = { userName: "Ariful", userId: 343 };
users5.push(users6);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
