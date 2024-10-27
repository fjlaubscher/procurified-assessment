import { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// components
import Alert from '../../components/alert';
import AppLayout from '../../components/app-layout';
import Stack from '../../components/stack';

import LoginForm from './components/login-form';

// hooks
import useAppUserContext from '../../hooks/use-app-user-context';

// services
import { loginAsync } from '../../services/api/app-user';

import styles from './login.module.scss';

const LoginPage = () => {
  const { setToken } = useAppUserContext();
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = useCallback(
    async ({ email, password }) => {
      try {
        const { token } = await loginAsync({ email, password });

        if (token) {
          setToken(token);
          navigate('/');
        }
      } catch (error) {
        setSubmitError(error.message);
      }
    },
    [setToken, navigate]
  );

  return (
    <AppLayout title="Login">
      <Stack className={styles.login} direction="column" align="center">
        {submitError ? (
          <Alert variant="error" title="Failed to login">
            {submitError}
          </Alert>
        ) : null}
        <LoginForm onSubmit={handleSubmit} />
        <Link to="/register">Don&apos;t have an account?</Link>
      </Stack>
    </AppLayout>
  );
};

export default LoginPage;
