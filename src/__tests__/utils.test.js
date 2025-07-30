import { validateEmail, formatPhoneNumber, validatePhone, countryCodes } from '../utils';

describe('validateEmail', () => {
  it('returns true for valid emails', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user.name+tag@domain.co')).toBe(true);
  });
  it('returns false for invalid emails', () => {
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('user@.com')).toBe(false);
    expect(validateEmail('user@domain')).toBe(false);
  });
});

describe('formatPhoneNumber', () => {
  it('formats a 10-digit US phone number', () => {
    expect(formatPhoneNumber('1234567890')).toBe('(123) 456-7890');
    expect(formatPhoneNumber('(123)456-7890')).toBe('(123) 456-7890');
  });
  it('returns input if not a 10-digit number', () => {
    expect(formatPhoneNumber('12345')).toBe('12345');
    expect(formatPhoneNumber('abcdefghij')).toBe('abcdefghij');
  });
});

describe('validatePhone', () => {
  it('returns true for valid phone numbers (7-15 digits)', () => {
    expect(validatePhone('1234567')).toBe(true);
    expect(validatePhone('123456789012345')).toBe(true);
    expect(validatePhone('(123) 456-7890')).toBe(true);
  });
  it('returns false for invalid phone numbers', () => {
    expect(validatePhone('123456')).toBe(false);
    expect(validatePhone('1234567890123456')).toBe(false);
    expect(validatePhone('abc')).toBe(false);
  });
});

describe('countryCodes', () => {
  it('contains expected country codes', () => {
    expect(countryCodes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: '+1', label: 'US/Canada' }),
        expect.objectContaining({ code: '+44', label: 'UK' }),
        expect.objectContaining({ code: '+91', label: 'India' }),
        expect.objectContaining({ code: '+61', label: 'Australia' }),
        expect.objectContaining({ code: '+81', label: 'Japan' }),
      ])
    );
  });
});
