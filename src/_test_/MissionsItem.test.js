import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import MissionsItem from '../components/missions/MissionsItem';
import store from '../redux/store';

describe('Test Missions components', () => {
  test('should match with snapshot', () => {
    const missions = renderer
      .create(
        <Provider store={store}>
          <MissionsItem />
        </Provider>,
      )
      .toJSON();

    expect(missions).toMatchSnapshot();
  });
});
