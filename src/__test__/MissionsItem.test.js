import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MissionsItem from '../components/missions/MissionsItem';
import store from '../redux/store';

const App = () => {
  <Provider store={store}>
    <MissionsItem />
  </Provider>;
};

describe('Mission component test', () => {
  it('Testing Mission page rendering', () => {
    const MissionComponent = renderer.create(<App />).toJSON();
    expect(MissionComponent).toMatchSnapshot();
  });
});
