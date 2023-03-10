import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Missions from '../components/missions/MissionsItem';
import store from '../redux/store';

describe('Test Missions components', () => {
  test('should match with snapshot', () => {
    const missions = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();

    expect(missions).toMatchSnapshot();
  });
});
