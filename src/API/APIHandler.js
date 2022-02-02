const apiContinentsURL = 'https://corona.lmao.ninja/v2/continents';
const apiCountriesURL = 'https://corona.lmao.ninja/v2/countries';

// const apiCountryURL = (country) => `https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=2022-01-31`;

const fetchAllCountries = async () => {
  const response = await fetch(apiCountriesURL).then((data) => data.json());
  return response;
};

const fetchAllContinents = async () => {
  const response = await fetch(apiContinentsURL).then((data) => data.json());
  return response;
};

export default { fetchAllCountries, fetchAllContinents };
