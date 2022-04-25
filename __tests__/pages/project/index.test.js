import { render, screen } from '@testing-library/react';
import Project from '../../../pages/project/index';
import '@testing-library/jest-dom';

describe('Project', () => {
  it('renders a heading', () => {
    render(<Project />)

    const heading = screen.getByRole('heading', {
      name: /version/i,
    })

    expect(heading).toBeInTheDocument();
  });

  it('renders a link', () => {
    render(<Project />);

    const link = screen.getByRole('link', {
      name: 'Go to project',
    });

    expect(link).toHaveAttribute('href', '/project');

    expect(link).toBeInTheDocument();
  });
});
