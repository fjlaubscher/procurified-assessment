import { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// services
import { getMeAsync } from '../../services/api/app-user';

import AppUserContext from '.';

const TOKEN_KEY = 'token';

const AppUserContextProvider = ({ children }) => {
  const [appUser, setAppUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchAppUser = useCallback(async () => {
    setLoading(true);

    try {
      const user = await getMeAsync();
      if (user) {
        setAppUser(user);
      } else {
        localStorage.removeItem(TOKEN_KEY);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [setAppUser, setLoading]);

  const handleSetToken = useCallback(
    (newToken) => {
      localStorage.setItem(TOKEN_KEY, newToken);
      handleFetchAppUser();
    },
    [handleFetchAppUser]
  );

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      handleFetchAppUser();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppUserContext.Provider value={{ appUser, setAppUser, loading, setToken: handleSetToken }}>
      {children}
    </AppUserContext.Provider>
  );
};

AppUserContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppUserContextProvider;
