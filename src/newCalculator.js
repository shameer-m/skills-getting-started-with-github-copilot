// newCalculator.js - Calculator logic module (migrated)

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divides a by b.
 * @param {number} a
 * @param {number} b
 * @returns {number|string} Result or error message
 */
function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};
