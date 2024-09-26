// Task 1: Verify Interface Properties
var person = {
    name: "Orange",
    age: 25,
};
if (person.age > 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}
var teacher = {
    name: "Orange",
    subjects: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Python" },
        { name: "C++" },
    ],
};
for (var _i = 0, _a = teacher.subjects; _i < _a.length; _i++) {
    var subject = _a[_i];
    console.log(subject.name);
}
var productsArray = [
    { name: "Laptop", price: 1000, quantity: 10 },
    { name: "Keyboard", price: 500, quantity: 5 },
    { name: "Mouse", price: 250, quantity: 3 },
];
for (var index = 0; index < productsArray.length; index++) {
    if (productsArray[index].quantity > 5) {
        productsArray[index].price = productsArray[index].price * 1.1;
    }
}
var Device = /** @class */ (function () {
    function Device() {
    }
    Device.prototype.start = function () {
        console.log("Device starting with custom settings.");
    };
    return Device;
}());
var device = new Device();
if (device.start) {
    device.start();
}
else {
    console.log("Device starting with default settings.");
}
var counter = {};
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 6, 7, 2];
for (var _b = 0, numbersArray_1 = numbersArray; _b < numbersArray_1.length; _b++) {
    var number = numbersArray_1[_b];
    if (counter[number]) {
        counter[number]++;
    }
    else {
        counter[number] = 1;
    }
}
console.log(counter);
