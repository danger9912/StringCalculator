const StringCalculator = require('./stringCalculator');

test('returns 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('')).toBe(0);
});

test('returns the number for a single number string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1')).toBe(1);
});

test('returns the sum of two numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,5')).toBe(6);
});

test('returns the sum of multiple numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,2,3,4')).toBe(10);
});

test('handles new lines between numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1\n2,3')).toBe(6);
});

test('supports different delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//;\n1;2')).toBe(3);
});

test('throws an exception for negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('1,-2,3')).toThrow('negative numbers not allowed: -2');
});

test('throws an exception for multiple negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('1,-2,-3')).toThrow('negative numbers not allowed: -2,-3');
});

test('ignores numbers bigger than 1000', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('2,1001')).toBe(2);
});

test('supports delimiters of any length', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//[***]\n1***2***3')).toBe(6);
});

test('supports multiple delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//[*][%]\n1*2%3')).toBe(6);
});

test('supports multiple delimiters of any length', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//[***][%%]\n1***2%%3')).toBe(6);
});
