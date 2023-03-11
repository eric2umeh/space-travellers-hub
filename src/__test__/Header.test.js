import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Header from '../components/layout/Header';
import store from '../redux/store';

const App = () => {
  <Provider store={store}>
    <Header />
  </Provider>;
};

describe('Header component test', () => {
  it('Testing Header rendering', () => {
    const HeaderComponent = renderer.create(<App />).toJSON();
    expect(HeaderComponent).toMatchSnapshot();
  });
});
