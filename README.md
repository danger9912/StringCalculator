
# String Calculator TDD Kata

This project implements a String Calculator following the principles of Test-Driven Development (TDD). The calculator supports various input formats and custom delimiters, and is designed to be robust and handle edge cases as specified in the TDD Kata requirements.

## Features

- Add numbers from a string of comma-separated values.
- Handle new lines between numbers as delimiters.
- Support custom single-character delimiters.
- Support custom delimiters of any length.
- Support multiple custom delimiters.
- Throw an exception for negative numbers.
- Ignore numbers greater than 1000 in the sum.

## Installation

To set up the project, follow these steps:

1. **Clone the repository**:

    ```sh
    git clone https://github.com/yourusername/string-calculator.git
    cd string-calculator
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```
3. **Run Test**:

    ```sh
    npm test
    ```
## Usage

### Running the Calculator

The calculator is implemented in `stringCalculator.js`. You can use the `add` method to calculate the sum of numbers in a string.

Example usage:

```javascript
const StringCalculator = require('./stringCalculator');
const calculator = new StringCalculator();

console.log(calculator.add("")); // Output: 0
console.log(calculator.add("1")); // Output: 1
console.log(calculator.add("1,2,3")); // Output: 6
console.log(calculator.add("1\n2,3")); // Output: 6
console.log(calculator.add("//;\n1;2")); // Output: 3
console.log(calculator.add("//[***]\n1***2***3")); // Output: 6
console.log(calculator.add("//[*][%]\n1*2%3")); // Output: 6


--> Handling Special Cases

1. Empty Input: Returns 0.
2. Single Number: Returns the number itself.
3. Multiple Numbers: Returns the sum.
4. New Line as Delimiter: Handles new lines between numbers.
5. Custom Single Delimiter: Handles a custom single-character delimiter.
6. Multiple Delimiters: Handles multiple custom delimiters.
7. Delimiters of Any Length: Supports delimiters of any length enclosed in square brackets.
8. Negative Numbers: Throws an exception if negative numbers are present, listing all such numbers.
9. Numbers Greater than 1000: Ignores numbers greater than 1000 in the sum.
