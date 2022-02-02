import { useSelector } from 'react-redux';

import Spinner from '../Spinner/Spinner';
import CountryList from '../CountryList/CountryList';

const Home = () => {
  const { countries } = useSelector((state) => state.covid);

  return (
    <>
      {!countries.length && <Spinner />}
      {countries.length > 0 && <CountryList countries={countries} />}
    </>
  );
};

export default Home;
