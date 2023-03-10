import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store';

import Rockets from '../pages/rockets/RocketsPage';
import MissionsPage from '../pages/missions/MissionsPage';
import Profile from '../pages/profile/ProfilePage';

jest.mock('../pages/rockets/RocketsPage');
jest.mock('../pages/missions/MissionsPage');
jest.mock('../pages/profile/ProfilePage');

describe('Testing App component routes', () => {
  test('should render Rocket Page', () => {
    Rockets.mockImplementation(() => <h2>Show Rockets Page</h2>);
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const text = screen.getByText('Show Rockets Page');
    expect(text).toBeInTheDocument();
  });
  test('should render Mission Page', () => {
    MissionsPage.mockImplementation(() => <h2>Show Missions Page</h2>);
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const text = screen.getByText('show Missions Page');
    expect(text).toBeInDocument();
  });
  test('should render Profile Page', () => {
    Profile.mockImplementation(() => <h2>Show Profile Page</h2>);
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const text = screen.getByText('show Profile Page');
    expect(text).toBeInDocument();
  });
});
