import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppUserContextProvider from './context/app-user/provider';

import AppLayout from './components/app-layout';
import Loader from './components/loader';

import AppRouter from './router';

const App = () => {
  const fallback = (
    <AppLayout title="Loading..." isLoading>
      <Loader />
    </AppLayout>
  );

  return (
    <Suspense fallback={fallback}>
      <AppUserContextProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppUserContextProvider>
    </Suspense>
  );
};

export default App;
