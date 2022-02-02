/* eslint-disable implicit-arrow-linebreak, function-paren-newline */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CountUp from 'react-countup';
import images from '../../images';

import Spinner from '../Spinner/Spinner';
import CountryList from '../CountryList/CountryList';

const ContinentDetails = () => {
  const { continentName } = useParams();
  const continentDetails = useSelector((state) =>
    state.covid.continents.find((cont) => cont.continent === continentName),
  );
  const countries = useSelector((state) =>
    state.covid.countries.filter(
      (country) => country.continent === continentName,
    ),
  );

  return (
    <>
      {!continentDetails && <Spinner />}
      {continentDetails && (
        <>
          <div className="flex md:flex-row flex-col gap-6 md:gap-3 items-center w-full justify-center pb-16 pt-6 px-3 bg-blue-dark rounded-t-lg">
            <img
              src={images[continentName]}
              alt="continent map"
              className="w-40 invert"
            />
            <div className="flex flex-col font-bold text-2xl text-white">
              <CountUp
                delay={1}
                end={continentDetails.cases}
                separator=","
                prefix="Total Cases: "
                duration={3}
              />
              <CountUp
                delay={1}
                prefix="Total Deaths: "
                end={continentDetails.deaths}
                separator=","
                duration={3}
              />
            </div>
          </div>
          <CountryList countries={countries} />
        </>
      )}
    </>
  );
};

export default ContinentDetails;
