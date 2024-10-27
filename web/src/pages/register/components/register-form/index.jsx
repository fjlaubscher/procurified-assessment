import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

// components
import Button from '../../../../components/button';
import Form from '../../../../components/form';
import InputField from '../../../../components/input-field';

import { validateConfirmPassword } from './validation';

const RegisterForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    getValues
  } = useForm({ mode: 'onChange' });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="First Name"
        type="text"
        error={errors?.firstName?.message}
        {...register('firstName', { required: true })}
      />
      <InputField
        label="Surname"
        type="text"
        error={errors?.surname?.message}
        {...register('surname', { required: true })}
      />
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
      <InputField
        label="Confirm Password"
        type="password"
        error={errors?.confirmPassword?.message}
        {...register('confirmPassword', {
          required: true,
          validate: (value) => validateConfirmPassword(value, getValues('password'))
        })}
      />
      <Button disabled={!isValid || isSubmitting} loading={isSubmitting} type="submit" primary>
        Register
      </Button>
    </Form>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default RegisterForm;
