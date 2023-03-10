import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store';

import RocketsPage from '../pages/rockets/RocketsPage';
import MissionsPage from '../pages/missions/MissionsPage';
import MyProfilePage from '../pages/profile/ProfilePage';

jest.mock('../pages/rockets/RocketsPage');
jest.mock('../pages/missions/MissionsPage');
jest.mock('../pages/profile/ProfilePage');

describe('Testing App component routes', () => {
  test('should render Rocket Page', () => {
    RocketsPage.mockImplementation(() => <h1>Hello From Rockets Page</h1>);
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const text = screen.getByText('Hello From Rockets Page');
    expect(text).toBeInTheDocument();
  });

  test('should render Mission Page', () => {
    MissionsPage.mockImplementation(() => <h1>Hello From Missions Page</h1>);
    render(
      <MemoryRouter initialEntries={['/missions']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const text = screen.getByText('Hello From Missions Page');
    expect(text).toBeInTheDocument();
  });

  test('should render Profile Page', () => {
    MyProfilePage.mockImplementation(() => <h1>Hello From MyProfile Page</h1>);
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const text = screen.getByText('Hello From MyProfile Page');
    expect(text).toBeInTheDocument();
  });
});
