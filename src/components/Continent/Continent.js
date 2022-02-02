import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import images from '../../images';

const Continent = ({ continent: { continent, cases } }) => (
  <Link
    to={`/continent/${continent}`}
    className="md:flex-row flex flex-col px-3 py-10 hover:bg-gray-600 justify-between group h-full"
  >
    <img
      src={images[continent]}
      alt="continent map"
      className="md:w-1/2 w-full h-3/5 group-hover:invert"
    />
    <div className="flex flex-col gap-2 font-bold text-white items-end self-center md:self-end">
      <h4 className="self-center md:self-end">
        <span className="text-2xl">{`${continent}`}</span>
      </h4>
      <span className="text-xl">{cases.toLocaleString()}</span>
    </div>
  </Link>
);

Continent.propTypes = {
  continent: PropTypes.shape({
    continent: PropTypes.string.isRequired,
    cases: PropTypes.number.isRequired,
  }).isRequired,
};

export default Continent;
