/* eslint-disable object-curly-newline, implicit-arrow-linebreak */
import PropTypes from 'prop-types';

const Country = ({
  country: {
    country,
    cases,
    countryInfo: { flag },
  },
  index,
}) => {
  const bgColor = (fade = 'ff') =>
    `#${
      (index + 1) % 4 === 2 || (index + 1) % 4 === 3 ? '7c9edf' : '708dc2'
    }${fade}`;
  return (
    <div
      data-testid="countryItem"
      className="flex flex-col px-3 py-10 bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(to right, #ffffff00, ${bgColor(
          'aa',
        )} 40%, ${bgColor('cc')} 65%, ${bgColor()} 80%), url(${flag})`,
        backgroundSize: '50% 100%',
      }}
    >
      <div className="flex flex-col gap-2 self-end font-bold text-white items-end">
        <h4 className="flex flex-col items-end text-right">
          <span className="text-2xl">{country}</span>
        </h4>
        <span className="text-xl">{cases.toLocaleString()}</span>
      </div>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string.isRequired,
    cases: PropTypes.number.isRequired,
    countryInfo: PropTypes.shape({
      flag: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Country;
