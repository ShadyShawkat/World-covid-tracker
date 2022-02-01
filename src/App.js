import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { fetchCountries } from './redux/covidSlice';

import Nav from './components/Nav/Nav';
import CountryList from './components/CountryList/CountryList';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <>
      <Nav />
      <div className="mt-16 px-12 pt-6">
        <Routes>
          <Route path="/" element={<CountryList />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
