// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';

describe('Test Layout component', () => {
  test('should match with snapshot', () => {
    const layout = renderer
      .create(
        <BrowserRouter>
          <Layout>
            <h2>Hello World</h2>
          </Layout>
        </BrowserRouter>,
      )
      .toJSON();

    expect(layout).toMatchSnapshot();
  });
  test('should match snapshot', () => {
    render(
      <BrowserRouter>
        <Layout>
          <h2>Hello World</h2>
        </Layout>
      </BrowserRouter>,
    );

    const layout = screen.getByText('Hello World');
    expect(layout).toBeInTheDocument();
  });
});
