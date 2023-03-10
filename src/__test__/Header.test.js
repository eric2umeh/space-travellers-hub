// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/layout/Header';

describe('Test Header component', () => {
  test('header component should match with snapshot', () => {
    const header = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });

  test('should match with logo text', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const text = screen.getByText("Space Traveler's Hub", { exact: false });
    expect(text).toBeInTheDocument();
  });
});
