import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Home from '../components/Home/Home';

const intialState = {
  continents: [
    { continent: 'Asia', cases: 11111 },
    { continent: 'Africa', cases: 22222 },
    { continent: 'Europe', cases: 33333 },
    { continent: 'Australia-Oceania', cases: 44444 },
    { continent: 'North America', cases: 55555 },
    { continent: 'South America', cases: 66666 },
  ],
  totalData: {
    totalCases: 200000,
    totalDeaths: 18000,
  },
};

function fetchData() {
  return {
    type: 'FETCH_CONTINENTS_SUCCESS',
  };
}

function fetchDataAsync() {
  return (dispatch) => Promise.resolve(dispatch(fetchData()));
}

let mockStore; let
  store;

describe('Home component', () => {
  beforeEach(() => {
    mockStore = configureStore([thunk]);
    store = mockStore({ covid: intialState });
  });
  test('should execute fetch data', async () => {
    await store.dispatch(fetchDataAsync());
    const actions = store.getActions();
    expect(actions[0]).toEqual(fetchData());
  });
  test('Test Rendering continents', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
    const continentItem = screen.getAllByTestId('continentItem');
    expect(continentItem).toHaveLength(6);
  });
});
