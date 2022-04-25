import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /home page/i,
    })

    expect(heading).toBeInTheDocument();
  });

  it('renders a link', () => {
    render(<Home />);

    const link = screen.getByRole('link', {
      name: 'Go to project',
    });

    expect(link).toHaveAttribute('href', '/project');

    expect(link).toBeInTheDocument();
  });
});
