let users : object[];
users = [];

let user1: {userName: string, userId: number};
user1 = {userName: "ariful",userId: 343};
users.push(user1)
// console.log(user1)

let user2: {userName: string, userId: number};
user2 = {userName: "Alamin",userId: 345};
users.push(user2)
// console.log(user2)

// console.log(users);

for(const key in users){
    console.log(users[key])
}


