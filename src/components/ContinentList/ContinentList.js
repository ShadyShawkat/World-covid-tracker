import PropTypes from 'prop-types';
import styles from './ContinentList.module.css';

import Continent from '../Continent/Continent';

const ContinentList = ({ continents }) => (
  <ul className="grid grid-cols-2 rounded-lg overflow-hidden gap-0.5">
    {continents.map((continent) => (
      <li key={continent.continent} className={styles['continent-card']}>
        <Continent continent={continent} />
      </li>
    ))}
  </ul>
);

ContinentList.propTypes = PropTypes.array.isRequired;

export default ContinentList;
