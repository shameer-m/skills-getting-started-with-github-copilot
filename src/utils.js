// Utility functions for form validation and formatting

/**
 * Validates an email address using a simple regex pattern.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if valid, false otherwise.
 * Copilot: Checks if the email matches a basic pattern for validity.
 */
export function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Formats a phone number as (123) 456-7890 if it matches the US pattern.
 * @param {string} phone - The phone number to format.
 * @returns {string} The formatted phone number or the original input.
 * Copilot: Strips non-digits and formats as US phone if 10 digits.
 */
export function formatPhoneNumber(phone) {
  // Remove all non-digit characters
  const cleaned = ('' + phone).replace(/\D/g, '');
  // Format as (123) 456-7890
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

/**
 * Validates a phone number to ensure it contains 7 to 15 digits.
 * @param {string} phone - The phone number to validate.
 * @returns {boolean} True if valid, false otherwise.
 * Copilot: Accepts only phone numbers with 7-15 digits, ignoring non-digits.
 */
export function validatePhone(phone) {
  // Accepts 7 to 15 digits, ignores non-digits
  return /^\d{7,15}$/.test(phone.replace(/\D/g, ''));
}

/**
 * List of supported country codes for the contact form dropdown.
 * Each entry contains a code and a label for display.
 * Copilot: Used to populate the country code select menu in the contact form.
 */
export const countryCodes = [
  { code: '+1', label: 'US/Canada' }, // Copilot: North America
  { code: '+44', label: 'UK' },      // Copilot: United Kingdom
  { code: '+91', label: 'India' },   // Copilot: India
  { code: '+61', label: 'Australia' }, // Copilot: Australia
  { code: '+81', label: 'Japan' },     // Copilot: Japan
  // Add more as needed
];
