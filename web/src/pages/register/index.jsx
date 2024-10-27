import { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// components
import Alert from '../../components/alert';
import AppLayout from '../../components/app-layout';
import Stack from '../../components/stack';

import RegisterForm from './components/register-form';

// hooks
import useAppUserContext from '../../hooks/use-app-user-context';

// services
import { registerAsync } from '../../services/api/app-user';

import styles from './register.module.scss';

const RegisterPage = () => {
  const { setToken } = useAppUserContext();
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      setSubmitError(null);

      try {
        const { token } = await registerAsync(values);

        if (token) {
          setToken(token);
          navigate('/');
        }
      } catch (error) {
        setSubmitError(error.message);
      }
    },
    [setSubmitError, setToken, navigate]
  );

  return (
    <AppLayout title="Register">
      <Stack className={styles.register} direction="column" align="center">
        {submitError ? (
          <Alert title="Failed to register" variant="error">
            {submitError}
          </Alert>
        ) : null}
        <RegisterForm onSubmit={handleSubmit} />
        <Link to="/login">Already have an account?</Link>
      </Stack>
    </AppLayout>
  );
};

export default RegisterPage;
