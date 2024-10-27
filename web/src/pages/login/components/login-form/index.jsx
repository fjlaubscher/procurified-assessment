import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

// components
import Button from '../../../../components/button';
import Form from '../../../../components/form';
import InputField from '../../../../components/input-field';

const LoginForm = ({ onSubmit, onError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting }
  } = useForm({ mode: 'onChange' });

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <InputField
        label="Email"
        type="email"
        error={errors?.email?.message}
        {...register('email', { required: true })}
      />
      <InputField
        label="Password"
        type="password"
        error={errors?.password?.message}
        {...register('password', { required: true })}
      />
      <Button disabled={!isValid || isSubmitting} loading={isSubmitting} type="submit" primary>
        Login
      </Button>
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onError: PropTypes.func
};

export default LoginForm;
