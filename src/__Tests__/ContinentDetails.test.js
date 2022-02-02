import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Router, { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import ContinentDetails from '../components/ContinentDetails/ContinentDetails';

const intialState = {
  continents: [
    { continent: 'Asia', cases: 11111 },
    { continent: 'Africa', cases: 22222 },
    { continent: 'Europe', cases: 33333 },
    { continent: 'Australia-Oceania', cases: 44444 },
    { continent: 'North America', cases: 55555 },
    { continent: 'South America', cases: 66666 },
  ],
  countries: [
    {
      country: 'Egypt',
      cases: '1111',
      continent: 'Africa',
      countryInfo: { flag: '' },
    },
    {
      country: 'India',
      cases: '2222',
      continent: 'Asia',
      countryInfo: { flag: '' },
    },
    {
      country: 'Indonesia',
      cases: '3333',
      continent: 'Asia',
      countryInfo: { flag: '' },
    },
    {
      country: 'Canada',
      cases: '4444',
      continent: 'North America',
      countryInfo: { flag: '' },
    },
    {
      country: 'Algeria',
      cases: '5555',
      continent: 'Africa',
      countryInfo: { flag: '' },
    },
  ],
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('Home component', () => {
  test('Test Rendering countries', () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore({ covid: intialState });

    jest
      .spyOn(Router, 'useParams')
      .mockReturnValue({ continentName: 'Africa' });

    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <ContinentDetails />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
    const countryItem = screen.getAllByTestId('countryItem');
    expect(countryItem).toHaveLength(2);
  });
});
