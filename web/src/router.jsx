import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import ProtectedRoute from './components/protected-route';

// hooks
import useViewTransitionWithLocation from './hooks/use-view-transition-with-location';

// pages
const HomePage = lazy(() => import('./pages/home'));
const LoginPage = lazy(() => import('./pages/login'));
const NotFoundPage = lazy(() => import('./pages/not-found'));
const RegisterPage = lazy(() => import('./pages/register'));

const AppRouter = () => {
  const location = useViewTransitionWithLocation();

  return (
    <Routes location={location}>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
