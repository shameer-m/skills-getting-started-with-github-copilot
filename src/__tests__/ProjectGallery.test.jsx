import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProjectGallery from '../components/ProjectGallery';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      {
        title: 'Test Project',
        description: 'A test project.',
        image: '/next.svg',
        link: 'https://example.com'
      }
    ]),
  })
);

describe('ProjectGallery', () => {
  it('renders Project Gallery heading', async () => {
    render(<ProjectGallery />);
    expect(screen.getByRole('heading', { level: 2, name: /Project Gallery/i })).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('Test Project')).toBeInTheDocument());
  });
});
