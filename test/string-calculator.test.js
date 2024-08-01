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

