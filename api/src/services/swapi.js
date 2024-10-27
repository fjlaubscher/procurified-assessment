const SWAPI_URL = 'https://swapi.dev/api';

const searchPeopleListAsync = async (query) => {
  const requestURL = `${SWAPI_URL}/people/?search=${query}`;

  try {
    const response = await fetch(requestURL);

    if (response.ok) {
      return await response.json();
    } else {
      return null;
    }
  } catch (ex) {
    throw new Error(`Failed to fetch: ${requestURL} - ${ex.message}`);
  }
};

module.exports = {
  searchPeopleListAsync
};
