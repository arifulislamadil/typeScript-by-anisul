var users;
users = [];
var user1;
user1 = { userName: "ariful", userId: 343 };
users.push(user1);
// console.log(user1)
var user2;
user2 = { userName: "Alamin", userId: 345 };
users.push(user2);
// console.log(user2)
// console.log(users);
for (var key in users) {
    console.log(users[key]);
}
