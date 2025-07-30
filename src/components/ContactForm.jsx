"use client";
import React, { useState } from 'react';
import Layout from './Layout';
import { validateEmail, validatePhone, countryCodes } from '../utils';
import '../index.css';

/**
 * ContactForm component renders a contact form with validation and submission logic.
 * Copilot: Handles user input, validation, and displays a thank you message on submit.
 */
const ContactForm = () => {
  // Copilot: State for form fields, submission, and errors
  const [form, setForm] = useState({ name: '', email: '', countryCode: '+1', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  /**
   * Handles input changes and clears errors for the changed field.
   * Copilot: Updates form state and resets error for the field.
   */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  /**
   * Validates all form fields and returns an errors object.
   * Copilot: Checks for required fields and valid email/phone.
   */
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!validateEmail(form.email)) newErrors.email = 'Invalid email address.';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!validatePhone(form.phone)) newErrors.phone = 'Invalid phone number.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  /**
   * Handles form submission, validates fields, and sets submission state.
   * Copilot: Prevents default, validates, and shows thank you if valid.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Copilot: Contact section with form and thank you message */}
      <section id="contact">
        <h2>Contact Me</h2>
        {submitted ? (
          <p>Thank you for reaching out!</p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <div className="contact-form-row">
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                className="country-code-select"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>{c.code} ({c.label})</option>
                ))}
              </select>
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            {errors.phone && <span className="error">{errors.phone}</span>}
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            {errors.message && <span className="error">{errors.message}</span>}
            <button type="submit">Send</button>
          </form>
        )}
      </section>
    </Layout>
  );
};

export default ContactForm;
