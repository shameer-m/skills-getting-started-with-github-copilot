// Function to convert date from DD-MM-YYYY to YYYY-MM-DD
/**
 * Converts a date string from DD-MM-YYYY format to YYYY-MM-DD format.
 * @param {string} dateStr - The date string in DD-MM-YYYY format.
 * @returns {string} The date string in YYYY-MM-DD format.
 */
function formatDateToISO(dateStr) {
    const [day, month, year] = dateStr.split('-');
    return `${year}-${month}-${day}`;
}

// Function to reverse a string
/**
 * Reverses the given string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Export functions for use in other modules
module.exports = {
    formatDateToISO,
    reverseString
};
