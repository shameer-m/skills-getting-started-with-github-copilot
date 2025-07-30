import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../components/ContactForm';

describe('ContactForm', () => {
  it('renders the Contact Form section', () => {
    render(<ContactForm />);
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();
  });

  it('shows validation errors if fields are empty on submit', () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole('button', { name: /send/i }));
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });
});
