import { useContext } from 'react';

import AppUserContext from '../context/app-user';

const useAppUserContext = () => useContext(AppUserContext);

export default useAppUserContext;
