const apiURL = 'https://api.covid19tracking.narrativa.com/api?date_from=2022-01-31';
// const apiCountryURL = (country) => `https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=2022-01-31`;

const fetchAllCountries = async () => {
  const response = await fetch(apiURL).then((data) => data.json());
  return response;
};

export default { fetchAllCountries };
