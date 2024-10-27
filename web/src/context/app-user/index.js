import { createContext } from 'react';

const AppUserContext = createContext({
  appUser: null,
  setAppUser: () => {},
  token: null,
  setToken: () => {}
});

export default AppUserContext;
