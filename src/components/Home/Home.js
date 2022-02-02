import { useSelector } from 'react-redux';
import CountUp from 'react-countup';
import { FcGlobe } from 'react-icons/fc';

import Spinner from '../Spinner/Spinner';
import ContinentList from '../ContinentList/ContinentList';

const Home = () => {
  const {
    continents,
    totalData: { totalCases, totalDeaths },
  } = useSelector((state) => state.covid);

  return (
    <>
      {!continents.length && <Spinner />}
      {continents.length > 0 && (
        <>
          <div className="flex gap-3 items-center w-full justify-center pb-16 pt-6 bg-blue-dark rounded-t-lg">
            <FcGlobe className="text-8xl bg-white rounded-full" />
            <div className="flex flex-col font-bold text-2xl text-white">
              <CountUp
                delay={1}
                end={totalCases}
                separator=","
                prefix="Total Cases: "
                duration={3}
              />
              <CountUp
                delay={1}
                prefix="Total Deaths: "
                end={totalDeaths}
                separator=","
                duration={3}
              />
            </div>
          </div>
          <ContinentList continents={continents} />
        </>
      )}
    </>
  );
};

export default Home;
