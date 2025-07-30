import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from '../components/AboutMe';

describe('AboutMe', () => {
  it('renders the About Me section with expected content', () => {
    render(<AboutMe />);
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
    expect(screen.getByText(/passionate web developer/i)).toBeInTheDocument();
    expect(screen.getByText(/location:/i)).toBeInTheDocument();
    expect(screen.getByText(/email:/i)).toBeInTheDocument();
    expect(screen.getByText(/linkedin:/i)).toBeInTheDocument();
  });
});
