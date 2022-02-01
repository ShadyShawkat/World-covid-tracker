import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCountries } from './redux/covidSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return <div>App is working</div>;
};

export default App;
