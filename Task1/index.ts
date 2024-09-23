let num: number = 7; 

if (num % 2 === 0) {
    console.log(`${num} is even.`);
} else {
    console.log(`${num} is odd.`);
}



let prices: number[] = [5, 20, 15, 30, 10]; 
let threshold: number = 15;

for (let price of prices) {
    if (price > threshold) {
        console.log(price);
    }
}



let users = [
    { name: "Alice", age: 30, isAdmin: true },
    { name: "Bob", age: 25, isAdmin: false },
    { name: "Charlie", age: 35, isAdmin: true },
    { name: "David", age: 28, isAdmin: false }
]; // Example users

let oldestAdmin: { name: string; age: number } | null = null;

for (let user of users) {
    if (user.isAdmin) {
        if (!oldestAdmin || user.age > oldestAdmin.age) {
            oldestAdmin = user;
        }
    }
}

if (oldestAdmin) {
    console.log(`The oldest admin is ${oldestAdmin.name}.`);
}


