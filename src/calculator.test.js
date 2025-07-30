// calculator.test.js
// Jest unit tests for calculator functions

const { add, subtract, multiply, divide } = require('./newCalculator');

// Test addition function with positive numbers
// Test addition function with negative numbers
// Test addition function with zero

describe('add', () => {
    test('adds two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });
    test('adds two negative numbers', () => {
        expect(add(-2, -3)).toBe(-5);
    });
    test('adds a positive and a negative number', () => {
        expect(add(2, -3)).toBe(-1);
    });
    test('adds zero', () => {
        expect(add(0, 5)).toBe(5);
        expect(add(5, 0)).toBe(5);
    });
});

// Test subtraction function

describe('subtract', () => {
    test('subtracts two positive numbers', () => {
        expect(subtract(5, 3)).toBe(2);
    });
    test('subtracts a larger number from a smaller one', () => {
        expect(subtract(3, 5)).toBe(-2);
    });
    test('subtracts zero', () => {
        expect(subtract(5, 0)).toBe(5);
    });
});

// Test multiplication function

describe('multiply', () => {
    test('multiplies two positive numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });
    test('multiplies by zero', () => {
        expect(multiply(5, 0)).toBe(0);
    });
    test('multiplies negative numbers', () => {
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(-2, -3)).toBe(6);
    });
});

// Test division function, including division by zero

describe('divide', () => {
    test('divides two positive numbers', () => {
        expect(divide(6, 3)).toBe(2);
    });
    test('divides by one', () => {
        expect(divide(5, 1)).toBe(5);
    });
    test('divides negative numbers', () => {
        expect(divide(-6, 3)).toBe(-2);
        expect(divide(-6, -3)).toBe(2);
    });
    test('division by zero returns error message', () => {
        expect(divide(5, 0)).toBe('Error: Division by zero');
    });
});
