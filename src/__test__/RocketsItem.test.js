import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RocketsItem from '../components/rocketsItem/RocketsItem';

it('test if the rocket component is rendering', () => {
  const item = {
    rocket_id: '1',
    rocket_name: 'Starship',
    rocket_description:
      'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
    reserved: false,
    rocket_images: ['image1', 'image2'],
  };

  const test2 = renderer.create(
    <Provider store={store}>
      <RocketsItem item={item} />
    </Provider>,
  );

  expect(test2).toMatchSnapshot();
});
