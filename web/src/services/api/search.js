import { fetchWithAuthAsync } from '../fetch';

export const searchAsync = async (term) => {
  try {
    return await fetchWithAuthAsync(`/search?term=${term}`);
  } catch (ex) {
    throw new Error(ex.message);
  }
};
