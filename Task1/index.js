var num = 7;
if (num % 2 === 0) {
    console.log("".concat(num, " is even."));
}
else {
    console.log("".concat(num, " is odd."));
}
var prices = [5, 20, 15, 30, 10];
var threshold = 15;
for (var _i = 0, prices_1 = prices; _i < prices_1.length; _i++) {
    var price = prices_1[_i];
    if (price > threshold) {
        console.log(price);
    }
}
var users = [
    { name: "Alice", age: 30, isAdmin: true },
    { name: "Bob", age: 25, isAdmin: false },
    { name: "Charlie", age: 35, isAdmin: true },
    { name: "David", age: 28, isAdmin: false }
]; // Example users
var oldestAdmin = null;
for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
    var user = users_1[_a];
    if (user.isAdmin) {
        if (!oldestAdmin || user.age > oldestAdmin.age) {
            oldestAdmin = user;
        }
    }
}
if (oldestAdmin) {
    console.log("The oldest admin is ".concat(oldestAdmin.name, "."));
}
