import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';

import { fetchCountries, fetchTotalData } from './redux/covidSlice';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import ContinentDetails from './components/ContinentDetails/ContinentDetails';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchTotalData());
  }, [dispatch]);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <>
      <Nav />
      <div className="mt-16 px-12 pt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:continentName" element={<ContinentDetails />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
