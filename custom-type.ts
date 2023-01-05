type User7 = {userName: string; userId: number}
let users5: User7[];
users5 = [];

let users4: User7;
users4 = {userName: "Ariful", userId:343}
users5.push(users4)


let users6:User7;
users6 = {userName: "Ariful", userId:343}
users5.push(users6)

// console.log(users5);

type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET"


function requestHandler (requestType: RequestType){
 console.log(requestType);
}

requestHandler("GET")