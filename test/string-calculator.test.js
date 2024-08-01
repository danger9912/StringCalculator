const StringCalculator = require('../src/stringCalculator');

// Test case for empty string input
test('returns 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('')).toBe(0);
});

// Test case for a single number input
test('returns the number for a single number string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1')).toBe(1);
});

// Test case for two numbers input
test('returns the sum of two numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,5')).toBe(6);
});

// Test case for multiple numbers input
test('returns the sum of multiple numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,2,3,4')).toBe(10);
});

// Test case for handling new lines as delimiters
test('handles new lines between numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1\n2,3')).toBe(6);
});

// Test case for custom single-character delimiter
test('supports different delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//;\n1;2')).toBe(3);
});
