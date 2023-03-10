import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/rockets/Rockets';

describe('testing if rockets data is rendering', () => {
  test('component test', () => {
    const test = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(test).toMatchSnapshot();
  });
});
