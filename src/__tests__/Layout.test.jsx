import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout';

const mockChildren = <div data-testid="mock-children">Test Content</div>;

describe('Layout', () => {
  it('renders the Layout with navigation and children', () => {
    render(<Layout>{mockChildren}</Layout>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('mock-children')).toBeInTheDocument();
  });
});
