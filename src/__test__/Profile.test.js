import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ProfilePage from '../pages/ProfilePage';
import store from '../redux/store';

it('rockets list renders properly', () => {
  const tree = renderer
    .create(<Provider store={store}><ProfilePage /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
