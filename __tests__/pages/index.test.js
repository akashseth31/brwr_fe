import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  let component;

  beforeEach(() => {
    component = render(<Home />);
  });

  it('should render', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /home page/i,
    })

    expect(heading).toBeInTheDocument();
  });

  it('renders a link', () => {
    const link = screen.getByRole('link', {
      name: 'Go to project',
    });

    expect(link).toHaveAttribute('href', '/project');

    expect(link).toBeInTheDocument();
  });
});
