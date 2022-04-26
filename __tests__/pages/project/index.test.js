import { screen } from '@testing-library/react';
import Project from '../../../pages/project/index';
import '@testing-library/jest-dom';
import reducer, { initialState as project } from '../../../store/project/reducer';
import { renderWithState } from '../../../utils/render-wrapper.util';

const initialState = {
  project,
};

describe('Project', () => {
  let component;

  beforeEach(() => {
    component = renderWithState(<Project />, reducer, { initialState });
  });

  it('should match snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: `${project.name} version ${project.version}`,
    })

    expect(heading).toBeInTheDocument();
  });

  it('renders a button', () => {
    const button = screen.getByRole('button', {
      name: 'Upgrade Version',
    });

    expect(button).toBeInTheDocument();
  });
});
