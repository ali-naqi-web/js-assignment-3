// // // // // // // // // // // // // // // // // // // question 1

// // // // // // // // // // // // // // // // // // for (var i = 1 ; i<= 100 ; i++) {
// // // // // // // // // // // // // // // // // //     console.log(i)
    
// // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // question2 
// // // // // // // // // // // // // // // // // var evens = "";
// // // // // // // // // // // // // // // // // var odds = "";
// // // // // // // // // // // // // // // // // for (var i = 1; i <= 50; i++) {
// // // // // // // // // // // // // // // // //     if (i % 2 === 0) {
// // // // // // // // // // // // // // // // //         evens += i + " ";
// // // // // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // // // // //         odds += i + " ";
// // // // // // // // // // // // // // // // //     // }
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // console.log("Even: " + evens);
// // // // // // // // // // // // // // // // // console.log("Odd: " + odds);
// // // // // // // // // // // // // // // // // Question 4
// // // // // // // // // // // // // // // // var tableNum = prompt("Enter a number:");
// // // // // // // // // // // // // // // // for (var i = 1; i <= 10; i++) {
// // // // // // // // // // // // // // // //     console.log(tableNum + " x " + i + " = " + tableNum * i);
// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // question 5

// // // // // // // // // // // // // // // var n = prompt("Enter N:");
// // // // // // // // // // // // // // // var sum = 0;
// // // // // // // // // // // // // // // for (var i = 1; i <= n; i++) {
// // // // // // // // // // // // // // //     sum += i;
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // console.log("Sum = " + sum);
// // // // // // // // // // // // // // // // question 6
// // // // // // // // // // // // // // // // var studentNames = ["Ali", "Ahmed", "Sara", "Hamza", "Usman", "Bilal", "Zainab", "Ayesha"];
// // // // // // // // // // // // // // // // for (var i = 0; i < studentNames.length; i++) {
// // // // // // // // // // // // // // // //     console.log(i + 1 + ". " + studentNames[i]);
// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // question 7
// // // // // // // // // // // // // // var numbers = [45, 12, 89, 3, 67, 22, 91, 10];
// // // // // // // // // // // // // // var largest = numbers[0];
// // // // // // // // // // // // // // var smallest = numbers[0];

// // // // // // // // // // // // // // for (var i = 1; i < numbers.length; i++) {
// // // // // // // // // // // // // //     if (numbers[i] > largest) {
// // // // // // // // // // // // // //         largest = numbers[i];
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     if (numbers[i] < smallest) {
// // // // // // // // // // // // // //         smallest = numbers[i];
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // console.log("Largest: " + largest);
// // // // // // // // // // // // // // console.log("Smallest: " + smallest);

// // // // // // // // // // // // // // question no 8

// // // // // // // // // // // // // var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// // // // // // // // // // // // // for (var i = fruits.length - 1; i >= 0; i--) {
// // // // // // // // // // // // //     console.log(fruits[i]);
// // // // // // // // // // // // // }
// // // // // // // // // // // // //question no 9

// // // // // // // // // // // // var marks = [85, 42, 67, 30, 90, 55, 25, 78];
// // // // // // // // // // // // var passingMarks = [];
// // // // // // // // // // // // for (var i = 0; i < marks.length; i++) {
// // // // // // // // // // // //     if (marks[i] >= 50) {
// // // // // // // // // // // //         passingMarks.push(marks[i]);
// // // // // // // // // // // //     }
// // // // // // // // // // // // }
// // // // // // // // // // // // console.log("Passing Marks: ", passingMarks);
// // // // // // // // // // // // console.log("Total Passed: " + passingMarks.length);

// // // // // // // // // // // // question no 10

// // // // // // // // // // // var prices = [1200, 850, 430, 1600, 990];
// // // // // // // // // // // var total = 0;
// // // // // // // // // // // for (var i = 0; i < prices.length; i++) {
// // // // // // // // // // //     total += prices[i];
// // // // // // // // // // // }
// // // // // // // // // // // var average = total / prices.length;
// // // // // // // // // // // console.log("Total: " + total);
// // // // // // // // // // // console.log("Average: " + average);

// // // // // // // // // // // question no 11

// // // // // // // // // // var students = ["Ali", "Ahmed", "Sara", "Hamza", "Ayesha"];
// // // // // // // // // // var searchName = prompt("Enter Name:");
// // // // // // // // // // var isFound = false;

// // // // // // // // // // for (var i = 0; i < students.length; i++) {
// // // // // // // // // //     if (students[i] === searchName) {
// // // // // // // // // //         isFound = true;
// // // // // // // // // //         break;
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // if (isFound) {
// // // // // // // // // //     console.log("Student Found!");
// // // // // // // // // // } else {
// // // // // // // // // //     console.log("Student Not Found!");
// // // // // // // // // // }

// // // // // // // // // // question no 12

// // // // // // // // // var numbers = [10, 25, 40, 55, 70, 85, 100];
// // // // // // // // // var searchNum = parseInt(prompt("Enter Number:"));
// // // // // // // // // var index = -1;

// // // // // // // // // for (var i = 0; i < numbers.length; i++) {
// // // // // // // // //     if (numbers[i] === searchNum) {
// // // // // // // // //         index = i;
// // // // // // // // //         break;
// // // // // // // // //     }
// // // // // // // // // }

// // // // // // // // // if (index !== -1) {
// // // // // // // // //     console.log("Number found at index " + index + ".");
// // // // // // // // // } else {
// // // // // // // // //     console.log("Number not found.");
// // // // // // // // // }
// // // // // // // // // question no 13

// // // // // // // // var numbers = [12, -5, 0, 18, -9, 25, 0, -3, 40];
// // // // // // // // var positive = [];
// // // // // // // // var negative = [];
// // // // // // // // var zeros = [];

// // // // // // // // for (var i = 0; i < numbers.length; i++) {
// // // // // // // //     if (numbers[i] > 0) {
// // // // // // // //         positive.push(numbers[i]);
// // // // // // // //     } else if (numbers[i] < 0) {
// // // // // // // //         negative.push(numbers[i]);
// // // // // // // //     } else {
// // // // // // // //         zeros.push(numbers[i]);
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // console.log("Positive: ", positive);
// // // // // // // // console.log("Negative: ", negative);
// // // // // // // // console.log("Zeros: ", zeros);
// // // // // // // // question no 14

// // // // // // // var numbers = [10, 20, 10, 30, 20, 40, 30, 50];
// // // // // // // var uniqueNumbers = [];

// // // // // // // for (var i = 0; i < numbers.length; i++) {
// // // // // // //     var exists = false;
// // // // // // //     for (var j = 0; j < uniqueNumbers.length; j++) {
// // // // // // //         if (numbers[i] === uniqueNumbers[j]) {
// // // // // // //             exists = true;
// // // // // // //             break;
// // // // // // //         }
// // // // // // //     }
// // // // // // //     if (!exists) {
// // // // // // //         uniqueNumbers.push(numbers[i]);
// // // // // // //     }
// // // // // // // }

// // // // // // // console.log(uniqueNumbers);

// // // // // // //question no 15

// // // // // // for (var i = 1; i <= 5; i++) {
// // // // // //     var row = "";
// // // // // //     for (var j = 1; j <= i; j++) {
// // // // // //         row += "*";
// // // // // //     }
// // // // // //     console.log(row);
// // // // // // }
// // // // // // question no 16 
// // // // // for (var i = 5; i >= 1; i--) {
// // // // //     var row = "";
// // // // //     for (var j = 1; j <= i; j++) {
// // // // //         row += "*";
// // // // //     }
// // // // //     console.log(row);
// // // // // }
// // // // // question no 17

// // // // for (var i = 1; i <= 5; i++) {
// // // //     var row = "";
// // // //     for (var j = 1; j <= i; j++) {
// // // //         row += j;
// // // //     }
// // // //     console.log(row);
// // // // }

// // // // question no 18

// // // for (var i = 2; i <= 5; i++) {
// // //     console.log("Table of " + i);
// // //     for (var j = 1; j <= 10; j++) {
// // //         console.log(i + " x " + j + " = " + (i * j));
// // //     }
// // // }

// // // question no 19

// // var students = ["Ali", "Sara", "Ahmed", "Ayesha", "Hamza"];
// // var marks = [78, 92, 45, 88, 33];

// // var passed = 0;
// // var failed = 0;
// // var totalMarks = 0;
// // var highestMark = marks[0];
// // var topStudent = students[0];

// // for (var i = 0; i < students.length; i++) {
// //     var status = marks[i] >= 50 ? "PASS" : "FAIL";
// //     if (marks[i] >= 50) {
// //         passed++;
// //     } else {
// //         failed++;
// //     }

// //     totalMarks += marks[i];

// //     if (marks[i] > highestMark) {
// //         highestMark = marks[i];
// //         topStudent = students[i];
// //     }

// //     console.log(students[i] + " - " + marks[i] + " - " + status);
// // }

// // console.log("Total Students: " + students.length);
// // console.log("Passed: " + passed);
// // console.log("Failed: " + failed);
// // console.log("Top Student: " + topStudent + " (" + highestMark + ")");
// // console.log("Class Average: " + (totalMarks / students.length));

// // question no 20

// var products = ["Keyboard", "Mouse", "Monitor", "USB", "Headphones"];
// var prices = [2500, 1200, 22000, 800, 3500];

// var prodNum = parseInt(prompt("Product Number:"));
// var qty = parseInt(prompt("Quantity:"));

// if (prodNum >= 1 && prodNum <= 5 && qty > 0) {
//     var index = prodNum - 1;
//     var subtotal = prices[index] * qty;
//     var discount = subtotal >= 5000 ? subtotal * 0.10 : 0;
//     var finalBill = subtotal - discount;

//     console.log("Product: " + products[index]);
//     console.log("Unit Price: Rs. " + prices[index]);
//     console.log("Quantity: " + qty);
//     console.log("Subtotal: Rs. " + subtotal);
//     console.log("Discount: Rs. " + discount);
//     console.log("Final Bill: Rs. " + finalBill);
// }