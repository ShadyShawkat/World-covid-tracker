import { useSelector } from 'react-redux';
import styles from './CountryList.module.css';

import Spinner from '../Spinner/Spinner';
import Country from '../Country/Country';

const CountryList = () => {
  const { countries } = useSelector((state) => state.covid);

  return (
    <>
      {!countries.length && <Spinner />}
      {countries.length > 0 && (
        <ul className="grid grid-cols-2">
          {countries.map((country) => (
            <li key={country.country} className={styles['country-card']}>
              <Country country={country} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CountryList;
