const StringCalculator = require('./stringCalculator');
const calculator = new StringCalculator();

// testcases :-

console.log(calculator.add("")); // Output: 0
console.log(calculator.add("1")); // Output: 1
console.log(calculator.add("1,2,3")); // Output: 6
console.log(calculator.add("1\n2,3")); // Output: 6
console.log(calculator.add("//;\n1;2")); // Output: 3
console.log(calculator.add("//[***]\n1***2***3")); // Output: 6
console.log(calculator.add("//[*][%]\n1*2%3")); // Output: 6
console.log(calculator.add("1,1001,2")); // Output: 3
console.log(calculator.add("//[***]\n1***2***1001")); // Output: 3
console.log(calculator.add("//[*][%][#]\n1*2%3#4")); // Output: 10
console.log(calculator.add("//[***][%%%]\n1***2%%%3")); // Output: 6
console.log(calculator.add("1,2,3,4,5")); // Output: 15
console.log(calculator.add("1\n2\n3\n4\n5")); // Output: 15
console.log(calculator.add("//;\n1;2;3;4;5")); // Output: 15
console.log(calculator.add("//[***]\n1***2***3***4***5")); // Output: 15
console.log(calculator.add("//[*][%]\n1*2%3*4%5")); // Output: 15
console.log(calculator.add("1000,2,3")); // Output: 1005
console.log(calculator.add("1001,2,3")); // Output: 5
console.log(calculator.add("//[***][%%%][&&&]\n1***2%%%3&&&4")); // Output: 10
console.log(calculator.add("//;\n1;-2;3")); // Throws an error
console.log(calculator.add("//[***][%%%]\n1***-2%%%3")); // Throws an error
