import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Project from '../../../pages/project/index';
// import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import reducer, { initialState as project } from '../../../store/project/reducer';
import { createStore } from "redux";

const mockStore = configureStore([]);

describe('Project', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({ project });

    component = renderer.create(
      <Provider store={store}>
        <Project />
      </Provider>
    );
  });

  it('should match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  // it('renders a heading', () => {
  //   render(<Project />)

  //   const heading = screen.getByRole('heading', {
  //     name: /version/i,
  //   })

  //   expect(heading).toBeInTheDocument();
  // });

  // it('renders a link', () => {
  //   render(<Project />);

  //   const link = screen.getByRole('link', {
  //     name: 'Go to project',
  //   });

  //   expect(link).toHaveAttribute('href', '/project');

  //   expect(link).toBeInTheDocument();
  // });
});
