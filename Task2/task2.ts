
// Q1
// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements



let array: number[] = [10,2,3,6,7,]

let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

console.log("Sum of all elements in the array: ", sum);

// Q2
// Check if All Elements in Array are Positive
// You are given an array of numbers. Check whether all elements are positive, and print "All Positive" if true,
// otherwise print "Not All Positive".

let array2: number[] = [1,2,3,-4,5,6]

let allPositive = true;

for (let i = 0; i < array2.length; i++) {
    if (array2[i] <= 0) {
        allPositive = false;
        break;
    }
}

if (allPositive) {
    console.log("All Positive");
} else {
    console.log("Not All Positive");
}

// Q3
// Find the Longest Name in an Array
// You are given an array of names. Iterate through the array and print the longest name .

let array3: string[] = ["John", "Jane", "Tom", "Alice", "Bob"]
let longestName = "";

for (let i = 0; i < array3.length; i++) {
    if (array3[ i].length > longestName.length) {
        longestName = array3[i];
    }
}

// Q4
// Count Occurrences of a Character in a String
// You are given a string and a character. Print the number of times the character appears in the string .

// let  character :string[] = ["John", "Jane", "Tom", "Alice", "Bob"]
let character : string= "Tuqa"; 
let string : string = "Hello World";

let count = 0;

for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
        count++;
    }
}

// Q5
// Identify Prime Numbers in an Array
// You are given an array of numbers. Identify and print all prime numbers from the array. 
        // let num  : number[]= [1,2,3,89,76]
        

      
        let primeNumbers = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
            73, 79, 83, 89, 97,
          ];
          
            
          
                let prime : number[] = [];
                
                for (let i = 0; i < primeNumbers.length; i++) {
                    let isPrime = true;
                    
                    for (let j = 2; j < primeNumbers[i]; j++) {
                        if (primeNumbers[i] % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                    
                    if (isPrime) {
                        prime.push(primeNumbers[i]);
                    }
                }
                
              
                console.log("Prime Numbers in the Array: ", prime);
                        


  