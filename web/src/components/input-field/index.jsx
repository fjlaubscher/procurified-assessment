import { forwardRef } from 'react';
import PropTypes from 'prop-types';

// components
import Field from '../field';

const InputField = forwardRef(({ label, name, required, error, ...rest }, ref) => (
  <Field error={error}>
    {label && <label htmlFor={name}>{label}</label>}
    <input ref={ref} id={name} name={name} required={required} {...rest} />
  </Field>
));

InputField.displayName = 'InputField';
InputField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool
};

export default InputField;
