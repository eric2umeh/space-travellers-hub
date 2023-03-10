import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Provider from 'react-redux';
import store from '../redux/store';
import RocketsItem from '../components/rockets/RocketsItem';

describe('Testing if Rockets data is rendering', () => {
  test('component test', () => {
    const test = renderer.create(
      <Provider store={store}>
        <RocketsItem />
      </Provider>,
    );
    expect(test).toMatchSnapshot();
  });
});
