import { fetchAsync, fetchWithAuthAsync } from '../fetch';

export const loginAsync = async ({ email, password }) => {
  try {
    return await fetchAsync(`/auth/login`, {
      method: 'POST',
      body: { email, password }
    });
  } catch (ex) {
    throw new Error(ex.message);
  }
};

export const registerAsync = async (appUser) => {
  const { firstName, surname, email, password } = appUser;
  try {
    return await fetchAsync(`/auth/register`, {
      method: 'POST',
      body: { firstName, surname, email, password }
    });
  } catch (ex) {
    throw new Error(ex.message);
  }
};

export const getMeAsync = async () => {
  try {
    return await fetchWithAuthAsync(`/auth/me`);
  } catch (ex) {
    throw new Error(ex.message);
  }
};
